"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import GradientBackground from "@/components/GradientBackground";
import DotPattern from "@/components/DotPattern";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} relative min-h-screen w-full overflow-hidden bg-black`}>
      <GradientBackground />
      <DotPattern />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
