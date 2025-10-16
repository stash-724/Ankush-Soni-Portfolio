"use client";
import React from "react";
import Timeline from "@/components/ui/timeline";
import { experienceData } from "@/data/experienceData";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function ExperienceSection() {
  return (
    <section id="Experience" className="bg-black pt-10 pb-36">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-22 md:px-8 lg:px-10">
            <TextGenerateEffect className="text-center text-[20px] md:text-5xl lg:text-6xl"
                    words="My work experience"
            />
      </div>
      <Timeline data={experienceData} />
    </section>
  );
}
