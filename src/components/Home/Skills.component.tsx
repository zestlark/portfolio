"use client";
import { skills } from "@/constants";
import { Typography } from "../core";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";

export const SkillsComponent = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const calculateTranslation = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Move by the difference between total width and viewport width
        // Plus 200px extra to ensure the last card (Python) is fully centered.
        const diff = contentWidth - viewportWidth + 200;
        if (diff > 0) {
          setTranslateX(diff);
        }
      }
    };

    // Use a small timeout to ensure layout is stable
    const timer = setTimeout(calculateTranslation, 100);

    window.addEventListener("resize", calculateTranslation);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateTranslation);
    };
  }, []);

  // Calculate vertical pinY manually
  // As we scroll through 1200vh, the viewport remains pinned for 1100vh.
  const pinY = useTransform(scrollYProgress, [0, 1], ["0vh", "1100vh"]);

  // Horizontal translation for skills, now using absolute pixels for reliability
  // Reaches full translation at 85% scroll and holds it until 100%
  const x = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [0, -translateX, -translateX],
  );

  return (
    <section ref={targetRef} className="relative h-[1200vh]">
      <motion.div
        style={{ y: pinY }}
        className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Hidden SVG Definition for the Mask */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="bowTiePath" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 Q 0.5 0.35 1 0 L 1 1 Q 0.5 0.65 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="h-32 w-full flex flex-col items-center justify-center relative z-10 mb-10">
          <Typography variant="newtitle">Skills</Typography>
          <Typography variant="subtitle">Mastering the modern stack</Typography>
        </div>

        {/* Viewport is now masked, cards move inside */}
        <div
          className="w-full relative overflow-hidden -mt-18"
          style={{ clipPath: "url(#bowTiePath)" }}
        >
          <motion.div
            ref={contentRef}
            style={{ x }}
            className="flex items-center gap-10 px-10 min-h-[450px]"
          >
            <div className="empty-card min-w-[100vh] h-3 "></div>
            {skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  background: `linear-gradient(135deg, ${skill.color}77, ${skill.color}22)`,
                }}
                className="flex flex-col items-center justify-center min-w-64 h-[450px] shrink-0 shadow-2xl rounded-xl border border-white/5"
              >
                <img
                  className="w-20 aspect-square mb-4 select-none pointer-events-none"
                  src={skill.logo}
                  alt={skill.name}
                />
                <Typography variant="subtitle" className="select-none">
                  {skill.name}
                </Typography>
              </div>
            ))}
            {/* Added spacer to ensure scrollWidth accounts for padding-right and last card is fully visible */}
            <div className="min-w-10 h-[450px] shrink-0" aria-hidden="true" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
