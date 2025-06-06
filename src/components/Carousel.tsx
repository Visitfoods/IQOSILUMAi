"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Machine {
  id: number;
  name: string;
  image: string;
  baseModel: string;
}

type ColorVariant = "Breeze" | "Midnight" | "Leaf" | "Terracotta" | "Violet";

const machines: Machine[] = [
  { id: 1, name: "ILUMAi BREEZE", image: "/IMG/ILUMAi/ILUMAi_BREEZE.png", baseModel: "ILUMAi" },
  { id: 2, name: "ILUMAi ONE", image: "/IMG/ILUMAi-ONE/ILUMAi-ONE_BREEZE.png", baseModel: "ILUMAi-ONE" },
  { id: 3, name: "ILUMAi PRIME", image: "/IMG/ILUMAi-PRIME/ILUMAi-PRIME_BREEZE.png", baseModel: "ILUMAi-PRIME" },
];

const colorConfig = [
  { color: "#3A3D4A", variant: "Midnight", label: "Midnight" },
  { color: "#95C4C7", variant: "Breeze", label: "Breeze" },
  { color: "#8F993D", variant: "Leaf", label: "Leaf" },
  { color: "#AA4C3A", variant: "Terracotta", label: "Terracotta" },
  { color: "#8690CA", variant: "Violet", label: "Violet", availableFor: ["ILUMAi", "ILUMAi-ONE"] },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [viewMode, setViewMode] = useState<"carousel" | "detail">("carousel");
  const [selectedColor, setSelectedColor] = useState<ColorVariant>("Breeze");
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Inicia a animação automática após a montagem
    if (!initialAnimationComplete) {
      let currentRotation = 0;
      const interval = setInterval(() => {
        if (currentRotation < machines.length) {
          setDirection("right");
          setCurrentIndex((prev) => (prev + 1) % machines.length);
          currentRotation++;
        } else {
          clearInterval(interval);
          setInitialAnimationComplete(true);
        }
      }, 1000); // Intervalo de 1 segundo entre cada transição

      return () => clearInterval(interval);
    }
  }, [initialAnimationComplete]);

  // Função para formatar o nome do modelo de forma consistente
  const formatModelName = (baseModel: string) => {
    // Substitui ILUMAi por ILUMA i no título
    return baseModel.replace('ILUMAi', 'ILUMA i').replace('-', ' ');
  };

  const getPositionedMachines = () => {
    const totalMachines = machines.length;
    return machines.map((machine, index) => {
      let position: "left" | "center" | "right";
      
      if (index === currentIndex) {
        position = "center";
      } else if (index === (currentIndex - 1 + totalMachines) % totalMachines) {
        position = "left";
      } else if (index === (currentIndex + 1) % totalMachines) {
        position = "right";
      } else if (index < currentIndex) {
        position = "left";
      } else {
        position = "right";
      }
      
      return { ...machine, position };
    });
  };

  const handleClick = (clickDirection: "left" | "right") => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(clickDirection);
    
    const totalMachines = machines.length;
    if (clickDirection === "left") {
      setCurrentIndex((prev) => (prev - 1 + totalMachines) % totalMachines);
    } else {
      setCurrentIndex((prev) => (prev + 1) % totalMachines);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleDiscover = () => {
    const centerMachine = getPositionedMachines().find(m => m.position === "center");
    if (centerMachine) {
      setSelectedMachine(centerMachine);
      setSelectedColor("Breeze"); // Reset para cor padrão
      setViewMode("detail");
    }
  };

  const handleBack = () => {
    setSelectedMachine(null);
    setViewMode("carousel");
  };

  const handleColorChange = (variant: ColorVariant) => {
    setSelectedColor(variant);
  };

  // Gera o caminho da imagem baseado no modelo e cor selecionada
  const getImagePath = (machine: Machine, colorVariant: ColorVariant) => {
    let colorForPath = colorVariant.toUpperCase();
    if (colorVariant === "Terracotta") {
      colorForPath = "TERRACOTA";
    } else if (colorVariant === "Violet") {
      colorForPath = "-VIOLET";
    }
    return `/IMG/${machine.baseModel}/${machine.baseModel}_${colorForPath}.png`;
  };

  const getColorStyle = (colorVariant: ColorVariant, machine: Machine) => {
    if (machine.baseModel === "ILUMAi-PRIME") {
      switch (colorVariant) {
        case "Midnight":
          return "bg-[#131d2b]";
        case "Breeze":
          return "bg-[#82aaae]";
        case "Leaf":
          return "bg-[#0f2e27]";
        case "Terracotta":
          return "bg-[#2d1e27]";
        case "Violet":
          return "bg-[#898FC8]";
        default:
          return "";
      }
    } else {
      // Cores originais para outros modelos
      switch (colorVariant) {
        case "Midnight":
          return "bg-[#1E1E1E]";
        case "Breeze":
          return "bg-[#4A919E]";
        case "Leaf":
          return "bg-[#8a8e28]";
        case "Terracotta":
          return "bg-[#A75D5D]";
        case "Violet":
          return "bg-[#898FC8]";
        default:
          return "";
      }
    }
  };

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.5,
      filter: "blur(2px) brightness(0.7)"
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      zIndex: 10,
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    left: {
      x: "-30%",
      opacity: 0.7,
      scale: 0.7,
      zIndex: 0,
      filter: "blur(1px) brightness(0.8)",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    right: {
      x: "30%",
      opacity: 0.7,
      scale: 0.7,
      zIndex: 0,
      filter: "blur(1px) brightness(0.8)",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.5,
      filter: "blur(2px) brightness(0.7)",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  const positionedMachines = getPositionedMachines();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[1400px] h-full md:h-[80vh] px-4">
          {viewMode === "carousel" ? (
            <motion.div 
              key="carousel"
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[85%] h-[85%] flex items-center justify-center -mt-20 sm:-mt-24 md:-mt-28">
                  <motion.div 
                    className="absolute inset-0 bottom-[20%] z-[5]"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (isAnimating) return;
                      
                      const swipe = offset.x;
                      
                      if (Math.abs(swipe) > 50) {
                        if (swipe < 0) {
                          handleClick("right");
                        } else {
                          handleClick("left");
                        }
                      }
                    }}
                  />
                  
                  <button 
                    className="absolute left-0 top-0 bottom-[20%] w-1/3 h-auto z-[15] bg-transparent focus:outline-none"
                    onClick={() => !isAnimating && handleClick("left")}
                    disabled={isAnimating}
                    aria-label="Imagem anterior"
                  />
                  
                  <button 
                    className="absolute right-0 top-0 bottom-[20%] w-1/3 h-auto z-[15] bg-transparent focus:outline-none"
                    onClick={() => !isAnimating && handleClick("right")}
                    disabled={isAnimating}
                    aria-label="Próxima imagem"
                  />

                  <AnimatePresence mode="sync" initial={false} custom={direction}>
                    {positionedMachines.map((machine) => (
                      <motion.div
                        key={machine.id}
                        className="absolute inset-0 flex items-center justify-center"
                        custom={direction}
                        initial="enter"
                        animate={machine.position}
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        style={{ zIndex: machine.position === "center" ? 10 : 1 }}
                      >
                        {machine.position === "center" && (
                          <div className="flex flex-col items-center justify-center w-full h-full">
                            <div 
                              className="relative w-[65%] sm:w-[55%] md:w-[45%] aspect-square pointer-events-none"
                            >
                              <Image
                                src={machine.image}
                                alt={machine.name}
                                width={400}
                                height={400}
                                className="object-contain w-full h-full relative z-10 animate-scale"
                                priority
                                draggable={false}
                              />
                            </div>
                          </div>
                        )}
                        
                        {machine.position !== "center" && (
                          <motion.div 
                            className="relative w-[45%] sm:w-[35%] md:w-[30%] aspect-square pointer-events-none"
                            whileHover={{
                              scale: 1.05,
                              opacity: 0.8,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Image
                              src={machine.image}
                              alt={machine.name}
                              width={400}
                              height={400}
                              className="object-contain w-full h-full"
                              priority
                              draggable={false}
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Setas de navegação */}
                  <div className="absolute w-full flex justify-between px-4 sm:px-8 md:px-12 bottom-[30%] sm:bottom-[32%] md:bottom-[34%]">
                    <button
                      onClick={() => !isAnimating && handleClick("left")}
                      className="text-white p-2 hover:text-gray-300 transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    </button>
                    <button
                      onClick={() => !isAnimating && handleClick("right")}
                      className="text-white p-2 hover:text-gray-300 transition-colors"
                      aria-label="Próximo"
                    >
                      <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    </button>
                  </div>

                  <div className="absolute bottom-[10%] left-0 right-0 flex justify-center">
                    <button
                      className="bg-white text-black px-8 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors relative group z-30"
                      onClick={handleDiscover}
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse scale-[1.3] transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-[pulse_2s_ease-in-out_infinite] scale-[1.5] transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/10 rounded-full animate-[pulse_3s_ease-in-out_infinite] scale-[1.7] transition-transform duration-300" />
                      <span className="relative z-10">Descobre</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              className="relative w-full h-full"
            >
              <div className="relative h-screen flex flex-col justify-between pb-8 sm:pb-12 md:pb-16">
                <div className="relative flex-1 flex flex-col items-center justify-center">
                  {/* Seta para voltar centralizada com círculo e efeito pulsar */}
                  <div className="w-full flex justify-center mt-16 sm:-mt-4 md:-mt-5 mb-0">
                    <button
                      onClick={handleBack}
                      className="relative text-white p-2 hover:text-gray-300 transition-colors group"
                      aria-label="Voltar"
                    >
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-150 group-hover:scale-[1.7] transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full animate-pulse scale-[1.7] group-hover:scale-[1.9] transition-transform duration-300" />
                      <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10" />
                    </button>
                  </div>

                  <h1 className="text-white font-iqos text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 mt-20 sm:mt-16 md:mt-20">
                    {formatModelName(selectedMachine?.baseModel || "")}
                  </h1>

                  {/* Ícones logo após o título */}
                  <div className="flex justify-center items-start gap-8 sm:gap-12 md:gap-16 mb-6 sm:mb-8 md:mb-10 mt-12 sm:mt-6 md:mt-8">
                    {selectedMachine?.baseModel === "ILUMAi-ONE" ? (
                      <>
                        <div className="flex flex-col items-center">
                          <Image
                            src="/Icons/FlexPuff.svg"
                            alt="Flex Puff"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                          />
                          <span className="mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Flex Puff</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <Image
                            src="/Icons/InicioAutomatico.svg"
                            alt="Início Automático"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                          />
                          <span className="mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Início Automático</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-center">
                          <Image
                            src="/Icons/FlexPuff.svg"
                            alt="Flex Puff"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                          />
                          <span className="mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Flex Puff</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <Image
                            src="/Icons/FlexBattery.svg"
                            alt="Flex Battery"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                          />
                          <span className="mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Flex Battery</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <Image
                            src="/Icons/Modo Pausa.svg"
                            alt="Modo Pausa"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                          />
                          <span className="mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Modo Pausa</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <Image
                            src="/Icons/EcraTatil.svg"
                            alt="Ecrã Tátil"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                          />
                          <span className="mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Ecrã Tátil</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="relative w-full flex-1 flex items-center justify-center -mt-65 sm:-mt-70 md:-mt-80">
                    <Image
                      src={getImagePath(selectedMachine!, selectedColor)}
                      alt={selectedMachine?.name || ""}
                      width={400}
                      height={400}
                      className="w-32 sm:w-45 md:w-50 h-auto object-contain -mt-24 sm:mt-0"
                      priority
                    />
                  </div>

                  {/* Cores com mais espaçamento e posicionadas mais abaixo */}
                  <div className="absolute left-0 right-0 bottom-[15%] sm:bottom-[27%] md:bottom-[29%]">
                    <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
                      {colorConfig
                        .filter((c) => !c.availableFor || c.availableFor.includes(selectedMachine?.baseModel || ""))
                        .map((colorObj) => (
                          <button
                            key={colorObj.color}
                            onClick={() => handleColorChange(colorObj.variant as ColorVariant)}
                            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full ${getColorStyle(
                              colorObj.variant as ColorVariant,
                              selectedMachine!
                            )} ${
                              selectedColor === colorObj.variant
                                ? "ring-2 ring-offset-2 ring-white"
                                : ""
                            }`}
                            aria-label={`Selecionar cor ${colorObj.label}`}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 