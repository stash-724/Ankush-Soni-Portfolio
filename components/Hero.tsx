import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="pt-28 pb-28">
      <Spotlight />
      <div id="Home" className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#06091E_3px,transparent_3px),linear-gradient(to_bottom,#06091E_3px,transparent_3px)]", 
          )}
        />
        
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-gray-600 dark:text-gray-300 max-w-80">
          From Algorithms to Aesthetics
        </h2>
        <h2 className="uppercase tracking-widest text-xs text-center text-gray-600 dark:text-gray-300 max-w-80">
          Full-Stack Thinking in Every Pixel
        </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Ideas into Digital Experiences"
          />
          <p className="text-center my-4 md:text-lg lg:text-2xl text-gray-700 dark:text-gray-300">
            Hi, I'm Ankush, a Software Engineer based in India.
          </p>
          <a href="#About">
            <MagicButton
              title="Learn More"
              position="right"
              icon={<FaLocationArrow />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
