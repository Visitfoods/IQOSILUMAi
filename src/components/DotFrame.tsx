"use client";

import { useEffect, useState } from "react";

export default function DotFrame() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 390,
    height: typeof window !== 'undefined' ? window.innerHeight : 844
  });

  // Função para atualizar o tamanho quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Configurar listener de redimensionamento
    window.addEventListener('resize', handleResize);
    // Inicializar com valores corretos
    handleResize();

    // Limpar listener quando componente for desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tamanho fixo para os círculos em todos os dispositivos
  const circleRadius = 10; // Tamanho constante
  
  // Espaçamento fixo entre círculos
  const spacing = 30; // Espaçamento constante
  
  // Distância fixa das bordas
  const borderOffset = 25;
  const innerOffset = borderOffset + 30;

  // Raio para os cantos arredondados - aumentado para maior curvatura
  const cornerRadius = Math.min(viewport.width, viewport.height) / 2.2; // Forma quase oval

  // Calcular número de círculos para cada lado (reto)
  const straightHorizontalLength = Math.max(0, viewport.width - 2 * cornerRadius);
  const straightVerticalLength = Math.max(0, viewport.height - 2 * cornerRadius);
  
  const horizontalCircles = Math.max(0, Math.floor(straightHorizontalLength / spacing) + 1);
  const verticalCircles = Math.max(0, Math.floor(straightVerticalLength / spacing) + 1);

  // Função para calcular a distância entre dois pontos
  const distance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Gerar pontos para os cantos arredondados com espaçamento uniforme
  const generateCornerPoints = (
    cornerX: number, 
    cornerY: number, 
    startAngle: number, 
    endAngle: number, 
    radius: number, 
    isInner: boolean
  ) => {
    const points = [];
    const offsetRadius = isInner ? innerOffset : borderOffset;
    const actualRadius = radius - offsetRadius;
    
    // Calcular o comprimento do arco
    const angleRange = Math.abs(endAngle - startAngle);
    const arcLength = angleRange * actualRadius;
    
    // Calcular quantos pontos cabem no arco com o espaçamento desejado
    const pointCount = Math.max(2, Math.floor(arcLength / spacing));
    
    // Primeiro ponto
    const firstAngle = startAngle;
    const firstX = cornerX + Math.cos(firstAngle) * actualRadius;
    const firstY = cornerY + Math.sin(firstAngle) * actualRadius;
    points.push({ x: firstX, y: firstY });
    
    // Pontos intermediários com espaçamento uniforme
    for (let i = 1; i < pointCount; i++) {
      const angle = startAngle + (angleRange * i) / pointCount;
      const x = cornerX + Math.cos(angle) * actualRadius;
      const y = cornerY + Math.sin(angle) * actualRadius;
      
      // Verificar se o novo ponto está longe o suficiente do último
      const lastPoint = points[points.length - 1];
      const dist = distance(lastPoint.x, lastPoint.y, x, y);
      
      if (dist >= spacing * 0.9) { // Uso 90% do espaçamento para evitar problemas de arredondamento
        points.push({ x, y });
      }
    }
    
    // Último ponto (apenas se estiver longe o suficiente do penúltimo)
    const lastAngle = endAngle;
    const lastX = cornerX + Math.cos(lastAngle) * actualRadius;
    const lastY = cornerY + Math.sin(lastAngle) * actualRadius;
    
    if (points.length > 0) {
      const lastPoint = points[points.length - 1];
      const dist = distance(lastPoint.x, lastPoint.y, lastX, lastY);
      
      if (dist >= spacing * 0.9) {
        points.push({ x: lastX, y: lastY });
      }
    }
    
    return points;
  };

  // Função para gerar atrasos aleatórios para animações
  const getRandomDelay = () => {
    return Math.floor(Math.random() * 10) * 0.2;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <style jsx global>{`
        @keyframes glow {
          0% { 
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
            opacity: 0.85;
          }
          50% { 
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.95));
            opacity: 1;
          }
          100% { 
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
            opacity: 0.85;
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(0.95); }
          50% { transform: scale(1.05); }
          100% { transform: scale(0.95); }
        }
        
        .circle-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .circle-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .circle-animated {
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${viewport.width} ${viewport.height}`} 
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Linha superior externa reta */}
        {horizontalCircles > 0 && [...Array(horizontalCircles)].map((_, i) => (
          <circle
            key={`top-outer-${i}`}
            cx={cornerRadius + i * spacing}
            cy={borderOffset}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto superior direito externo */}
        {generateCornerPoints(
          viewport.width - cornerRadius, 
          cornerRadius, 
          -Math.PI/2, 
          0, 
          cornerRadius, 
          false
        ).map((point, i) => (
          <circle
            key={`top-right-outer-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha direita externa reta */}
        {verticalCircles > 0 && [...Array(verticalCircles)].map((_, i) => (
          <circle
            key={`right-outer-${i}`}
            cx={viewport.width - borderOffset}
            cy={cornerRadius + i * spacing}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto inferior direito externo */}
        {generateCornerPoints(
          viewport.width - cornerRadius, 
          viewport.height - cornerRadius, 
          0, 
          Math.PI/2, 
          cornerRadius, 
          false
        ).map((point, i) => (
          <circle
            key={`bottom-right-outer-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha inferior externa reta */}
        {horizontalCircles > 0 && [...Array(horizontalCircles)].map((_, i) => (
          <circle
            key={`bottom-outer-${i}`}
            cx={viewport.width - cornerRadius - i * spacing}
            cy={viewport.height - borderOffset}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto inferior esquerdo externo */}
        {generateCornerPoints(
          cornerRadius, 
          viewport.height - cornerRadius, 
          Math.PI/2, 
          Math.PI, 
          cornerRadius, 
          false
        ).map((point, i) => (
          <circle
            key={`bottom-left-outer-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha esquerda externa reta */}
        {verticalCircles > 0 && [...Array(verticalCircles)].map((_, i) => (
          <circle
            key={`left-outer-${i}`}
            cx={borderOffset}
            cy={viewport.height - cornerRadius - i * spacing}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto superior esquerdo externo */}
        {generateCornerPoints(
          cornerRadius, 
          cornerRadius, 
          Math.PI, 
          Math.PI * 3/2, 
          cornerRadius, 
          false
        ).map((point, i) => (
          <circle
            key={`top-left-outer-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-glow"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha superior interna reta */}
        {horizontalCircles > 0 && [...Array(horizontalCircles)].map((_, i) => (
          <circle
            key={`top-inner-${i}`}
            cx={cornerRadius + i * spacing}
            cy={innerOffset}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto superior direito interno */}
        {generateCornerPoints(
          viewport.width - cornerRadius, 
          cornerRadius, 
          -Math.PI/2, 
          0, 
          cornerRadius, 
          true
        ).map((point, i) => (
          <circle
            key={`top-right-inner-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha direita interna reta */}
        {verticalCircles > 0 && [...Array(verticalCircles)].map((_, i) => (
          <circle
            key={`right-inner-${i}`}
            cx={viewport.width - innerOffset}
            cy={cornerRadius + i * spacing}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto inferior direito interno */}
        {generateCornerPoints(
          viewport.width - cornerRadius, 
          viewport.height - cornerRadius, 
          0, 
          Math.PI/2, 
          cornerRadius, 
          true
        ).map((point, i) => (
          <circle
            key={`bottom-right-inner-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha inferior interna reta */}
        {horizontalCircles > 0 && [...Array(horizontalCircles)].map((_, i) => (
          <circle
            key={`bottom-inner-${i}`}
            cx={viewport.width - cornerRadius - i * spacing}
            cy={viewport.height - innerOffset}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto inferior esquerdo interno */}
        {generateCornerPoints(
          cornerRadius, 
          viewport.height - cornerRadius, 
          Math.PI/2, 
          Math.PI, 
          cornerRadius, 
          true
        ).map((point, i) => (
          <circle
            key={`bottom-left-inner-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Linha esquerda interna reta */}
        {verticalCircles > 0 && [...Array(verticalCircles)].map((_, i) => (
          <circle
            key={`left-inner-${i}`}
            cx={innerOffset}
            cy={viewport.height - cornerRadius - i * spacing}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
        
        {/* Canto superior esquerdo interno */}
        {generateCornerPoints(
          cornerRadius, 
          cornerRadius, 
          Math.PI, 
          Math.PI * 3/2, 
          cornerRadius, 
          true
        ).map((point, i) => (
          <circle
            key={`top-left-inner-${i}`}
            cx={point.x}
            cy={point.y}
            r={circleRadius}
            fill="white"
            className="circle-animated circle-pulse"
            style={{ animationDelay: `${getRandomDelay()}s` }}
            filter="url(#glow)"
          />
        ))}
      </svg>
    </div>
  );
} 