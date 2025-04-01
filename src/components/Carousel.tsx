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
  { id: 2, name: "ILUMAi PRIME", image: "/IMG/ILUMAi-PRIME/ILUMAi-PRIME_BREEZE.png", baseModel: "ILUMAi-PRIME" },
  { id: 3, name: "ILUMAi PRIME ONE", image: "/IMG/ILUMAi-ONE/ILUMAi-ONE_BREEZE.png", baseModel: "ILUMAi-ONE" },
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Função para formatar o nome do modelo de forma consistente
  const formatModelName = (baseModel: string) => {
    return baseModel.replace('-', ' ');
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
                <div className="relative w-[85%] h-[85%] flex items-center justify-center">
                  <button 
                    className="absolute left-0 top-0 w-1/3 h-full z-20 bg-transparent focus:outline-none"
                    onClick={() => !isAnimating && handleClick("left")}
                    disabled={isAnimating}
                    aria-label="Imagem anterior"
                  />
                  
                  <button 
                    className="absolute right-0 top-0 w-1/3 h-full z-20 bg-transparent focus:outline-none"
                    onClick={() => !isAnimating && handleClick("right")}
                    disabled={isAnimating}
                    aria-label="Próxima imagem"
                  />

                  <AnimatePresence mode="sync" initial={false} custom={direction}>
                    {positionedMachines.map((machine) => (
                      <motion.div
                        key={machine.id}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        custom={direction}
                        initial="enter"
                        animate={machine.position}
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                      >
                        {machine.position === "center" && (
                          <div className="flex flex-col items-center justify-center w-full h-full">
                            <div 
                              className="relative w-[50%] sm:w-[40%] md:w-[35%] aspect-square pointer-events-none"
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
                            </div>
                          </div>
                        )}
                        
                        {machine.position !== "center" && (
                          <motion.div 
                            className="relative w-[30%] sm:w-[25%] md:w-[20%] aspect-square pointer-events-none"
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

                  <div className="absolute bottom-[30%] left-0 right-0 flex justify-center items-center space-x-24">
                    <button
                      onClick={() => !isAnimating && handleClick("left")}
                      className="p-2 text-white hover:text-gray-300 transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeftIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>
                    <button
                      onClick={() => !isAnimating && handleClick("right")}
                      className="p-2 text-white hover:text-gray-300 transition-colors"
                      aria-label="Próximo"
                    >
                      <ChevronRightIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>
                  </div>

                  <div className="absolute bottom-[20%] left-0 right-0 flex justify-center">
                    <button
                      className="bg-white text-black px-8 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={handleDiscover}
                    >
                      Descobre
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
              <div className="relative w-[85%] h-[85%] mx-auto">
                <motion.div
                  className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="bg-white/20 backdrop-blur-md text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center focus:outline-none mb-10 sm:mb-12 md:mb-14"
                    onClick={handleBack}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </motion.button>

                  <div className="flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-iqos text-center mb-6">
                      {selectedMachine ? formatModelName(selectedMachine.baseModel) : ''}
                    </h2>

                    <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center items-start gap-6 sm:gap-8 md:gap-10">
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
                            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Flex Puff</span>
                          </div>

                          <div className="flex flex-col items-center">
                            <Image
                              src="/Icons/InicioAutomatico.svg"
                              alt="Início Automático"
                              width={32}
                              height={32}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                            />
                            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Início Automático</span>
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
                            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Flex Puff</span>
                          </div>

                          <div className="flex flex-col items-center">
                            <Image
                              src="/Icons/FlexBattery.svg"
                              alt="Flex Battery"
                              width={32}
                              height={32}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                            />
                            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Flex Battery</span>
                          </div>

                          <div className="flex flex-col items-center">
                            <Image
                              src="/Icons/Modo Pausa.svg"
                              alt="Modo Pausa"
                              width={32}
                              height={32}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                            />
                            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Modo Pausa</span>
                          </div>

                          <div className="flex flex-col items-center">
                            <Image
                              src="/Icons/EcraTatil.svg"
                              alt="Ecrã Tátil"
                              width={32}
                              height={32}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"
                            />
                            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center">Ecrã Tátil</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>

                <div className="absolute inset-0 flex flex-col items-center">
                  {selectedMachine && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-[45%] sm:w-[40%] md:w-[35%] aspect-square mt-36"
                      >
                        <Image
                          src={getImagePath(selectedMachine, selectedColor)}
                          alt={`${selectedMachine.name} ${selectedColor}`}
                          width={400}
                          height={400}
                          className="object-contain w-full h-full"
                          priority
                          draggable={false}
                        />
                      </motion.div>

                      <div className="absolute bottom-[16%] left-0 right-0">
                        <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6">
                          {colorConfig.map((colorItem) => {
                            const isAvailable = !colorItem.availableFor || 
                                              colorItem.availableFor.includes(selectedMachine?.baseModel || "");
                            
                            if (!isAvailable) return null;
                            
                            return (
                              <motion.button
                                key={colorItem.variant}
                                className={`w-8 h-8 rounded-full border-2 ${
                                  selectedColor === colorItem.variant
                                    ? "border-white scale-110"
                                    : "border-transparent"
                                } ${getColorStyle(colorItem.variant as ColorVariant, selectedMachine)} transition-all duration-300`}
                                onClick={() => handleColorChange(colorItem.variant as ColorVariant)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Cor ${colorItem.label}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 