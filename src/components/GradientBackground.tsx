export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#95C4C7] via-[#7BA9AC] to-[#5C8E91] animate-gradient-slow" />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
} 