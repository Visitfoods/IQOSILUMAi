import Carousel from "../components/Carousel";
import CameraBackground from "../components/CameraBackground";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <CameraBackground />
      <Carousel />
    </main>
  );
}
