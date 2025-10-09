// /data/projectData.ts
export type Project = {
  title: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  description?: string;
};

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    image: "/Portfolio.webp",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    repoLink: "https://github.com/stash-724/portfolio-website",
    description: "A modern portfolio website showcasing projects with interactive animations and responsive design.",
  },
  {
    title: "Kylie Cosmetics",
    image: "/Kylie.webp",
    techStack: ["React", "Tailwind", "Framer Motion"],
    liveLink: "https://kylie-cosmetics-mu.vercel.app",
    repoLink: "https://github.com/stash-724/kylie-cosmetics",
    description: "A 10+ page responsive e-commerce clone with checkout and animations.",
  },
  {
    title: "Refokus Clone",
    image: "/Refokus.webp",
    techStack: ["React", "Tailwind", "Framer Motion"],
    liveLink: "https://refokusworkclone.netlify.app/",
    repoLink: "https://github.com/stash-724/Refokus-Clone",
    description: "A modern, fully responsive UI clone of Refokus.com featuring smooth animations and scroll interactions.",
  },
  {
    title: "Moody Player",
    image: "/Moody Player.webp",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    repoLink: "https://github.com/stash-724/Moody-Player",
    description: "Face-based mood detection for intelligent playlist curation.",
  },
  {
    title: "AI Captioner",
    image: "/AI-captioner.webp",
    techStack: ["Node.js", "Express", "MongoDB", "React", "Gemini API"],
    repoLink: "https://github.com/stash-724/ai-captioner",
    description: "AI-powered caption generation for image uploads (Gemini API).",
  },
];

export default projectsData;
