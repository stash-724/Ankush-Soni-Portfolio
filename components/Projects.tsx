import React from "react";
import Component from "@/components/ui/ImageReveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const ComponentDemo = () => {
  return (
    <section id="Projects" className="bg-white dark:bg-black pt-10 pb-36">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-36 md:px-8 lg:px-10">
        <TextGenerateEffect
          className="text-center text-[20px] md:text-5xl lg:text-6xl text-black dark:text-white"
          words="A small selection of recent projects"
        />
      </div>
      <div className="flex justify-center w-full">
        <Component />
      </div>
    </section>
  );
};

export default ComponentDemo;
