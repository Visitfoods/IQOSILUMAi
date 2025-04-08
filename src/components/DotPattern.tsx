import React from 'react';

interface DotPatternProps {
  numberOfDots?: number;
}

export default function DotPattern({ numberOfDots = 20 }: DotPatternProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-center items-center">
        <div className="w-full flex justify-between px-6 sm:px-16 md:px-20 gap-4 sm:gap-12 md:gap-16">
          {Array.from({ length: numberOfDots }).map((_, i) => (
            <div
              key={`top-${i}`}
              className="w-1 h-1 rounded-full bg-white/20"
            />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 flex justify-center items-center">
        <div className="w-full flex justify-between px-6 sm:px-16 md:px-20 gap-4 sm:gap-12 md:gap-16">
          {Array.from({ length: numberOfDots }).map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="w-1 h-1 rounded-full bg-white/20"
            />
          ))}
        </div>
      </div>

      {/* Left */}
      <div className="absolute top-0 left-0 bottom-0 w-16 flex flex-col justify-between py-4 sm:py-6 md:py-8">
        <div className="h-full flex flex-col justify-between">
          {Array.from({ length: numberOfDots }).map((_, i) => (
            <div
              key={`left-${i}`}
              className="w-1 h-1 rounded-full bg-white/20 ml-4 sm:ml-6 md:ml-8"
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="absolute top-0 right-0 bottom-0 w-16 flex flex-col justify-between py-4 sm:py-6 md:py-8">
        <div className="h-full flex flex-col justify-between">
          {Array.from({ length: numberOfDots }).map((_, i) => (
            <div
              key={`right-${i}`}
              className="w-1 h-1 rounded-full bg-white/20 mr-4 sm:mr-6 md:mr-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 