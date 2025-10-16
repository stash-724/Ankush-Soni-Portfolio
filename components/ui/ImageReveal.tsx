'use client';

import { LuMoveUpRight } from "react-icons/lu";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { projectsData } from '@/data/projectData';

// ✅ Extend ImageData type
interface ImageData {
  id: number;
  src: string;
  alt: string;
}
interface ExtendedImageData extends ImageData {
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

// ✅ Helper to return tech logo paths
const getTechLogo = (tech: string) => {
  const logos: Record<string, string> = {
    'React': '/icons/react-svgrepo-com.svg',
    'Redux': '/icons/redux-svgrepo-com.svg',
    'Tailwind': '/icons/tailwind-svgrepo-com.svg',
    'Framer Motion': '/icons/fm.svg',
    'Node.js': '/icons/nodejs-icon-logo-svgrepo-com.svg',
    'Express': '/icons/express.js.svg',
    'MongoDB': '/icons/mongo-svgrepo-com.svg',
    'Gemini API': '/icons/gemini.svg',
    'Next.js': '/icons/next-dot-js-svgrepo-com (1).svg',
    'TypeScript': '/icons/ts.svg',
  };
  return logos[tech] || '';
};

// ✅ Map projectsData → local structure
const images: ExtendedImageData[] = projectsData.map((p, idx) => ({
  id: idx + 1,
  src: p.image,
  alt: p.title,
  techStack: p.techStack,
  liveLink: p.liveLink,
  repoLink: p.repoLink,
}));

// ✅ Simple useMediaQuery hook
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, [query]);
  return matches;
};

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue-theme' | 'green-theme';
  size?: 'default' | 'compact' | 'expanded';
  asChild?: boolean;
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'default', asChild, className, children, ...props }, ref) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [activeImage, setActiveImage] = useState<ImageData | null>(null);

    const handleImageHover = useCallback((image: ImageData) => {
      setActiveImage(image);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setActiveImage(null);
    }, []);

    const variantClasses = {
      default: 'bg-black',
      'blue-theme': 'bg-gradient-to-b from-blue-900 from-10% to-blue-950 to-100% bg-blue-100',
      'green-theme': 'bg-gradient-to-b from-green-900 from-10% to-green-950 to-100% bg-green-100',
    };

    const sizeClasses = {
      default: 'p-4 text-xl sm:text-2xl md:text-5xl',
      compact: 'p-2 text-lg sm:text-xl md:text-4xl',
      expanded: 'p-6 text-2xl sm:text-3xl md:text-6xl',
    };

    const h2SizeClasses = {
      default: 'text-xl sm:text-2xl md:text-5xl',
      compact: 'text-lg sm:text-xl md:text-4xl',
      expanded: 'text-2xl sm:text-3xl md:text-6xl',
    };

    const iconSizeClasses = {
      default: 'w-6 h-6 sm:w-8 sm:h-8',
      compact: 'w-5 h-5 sm:w-6 sm:h-6',
      expanded: 'w-7 h-7 sm:w-9 sm:h-9',
    };

    const commonClasses = cn(
      'relative w-full min-h-fit rounded-md',
      variantClasses[variant],
      className
    );

    return (
      <div ref={ref} className={commonClasses} onMouseLeave={handleMouseLeave} {...props}>
        {images.map((image) => (
          <div key={image.id} className="mb-8 relative">
            <div
              className={cn(
                'cursor-pointer relative sm:flex items-center justify-between',
                sizeClasses[size]
              )}
              onMouseEnter={() => handleImageHover(image)}
            >
              {!isDesktop && (
                <img
                  src={image.src}
                  className='sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md'
                  alt='mobileImg'
                />
              )}
              <h2
                className={cn(
                  'newFont uppercase font-semibold sm:py-6 py-2 leading-[100%] relative',
                  h2SizeClasses[size],
                  activeImage?.id === image.id
                    ? 'mix-blend-difference z-20 text-gray-300'
                    : 'text-gray-300'
                )}
              >
                {image.alt}
              </h2>

              {/* Links: Site */}
              <div
                className={cn(
                  'flex p-4 rounded-full transition-all duration-500 ease-in-out',
                )}
              >
                <a
                  href={image.liveLink || image.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('transition-opacity hover:opacity-80',
                   activeImage?.id === image.id
                    ? 'mix-blend-difference z-20 bg-white text-black p-4 rounded-full'
                    : 'sm:p-4 p-2 rounded-full')}
                  title={image.liveLink ? "View Live Site" : "View GitHub Repository"}
                >
                  <LuMoveUpRight className={cn(iconSizeClasses[size], 'sm:text-current')} />
                </a>
              </div>

              <div
                className={`h-[2px] bg-white absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                  activeImage?.id === image.id ? 'w-full' : 'w-0'
                }`}
              />
            </div>

            {/* ✅ Tech icons */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {image.techStack.map((tech, i) => {
                  const logo = getTechLogo(tech);
                  return logo ? (
                    <img key={i} src={logo} alt={tech} className="w-6 h-6" title={tech} />
                  ) : (
                    <span
                      key={i}
                      className="text-xsbg-gray-700 px-2 py-1 rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* ✅ Hover image preview for this project */}
            {isDesktop && activeImage?.id === image.id && (
              <img
                src={image.src}
                alt={image.alt}
                className="absolute top-1/2 left-[65%] transform -translate-x-1/2 -translate-y-1/2bg-gray-950 object-cover pointer-events-none z-10 w-[320px] h-[240px] rounded-lg transition-opacity duration-300 opacity-100"
              />
            )}
          </div>
        ))}
      </div>
    );
  }
);

Component.displayName = 'Component';
export default Component;
