"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Typography } from "../core";
import { isImageDark, PROJECTS as workExperiences } from "@/constants/common";
import { RiArrowRightUpLine } from "@remixicon/react";

const PROJECTS = [
  {
    label: workExperiences[0].title,
    description: "",
    // thumbnail: TEMP_IMG_01,
    type: "screen",
  },
  ...workExperiences[0].projects,
  {
    label: workExperiences[1].title,
    description: "",
    // thumbnail: TEMP_IMG_01,
    type: "screen",
  },
  ...workExperiences[1].projects,
];

export const ProjectsComponentsStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pinY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", `${(PROJECTS.length - 1) * 100}vh`]
  );

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${PROJECTS.length * 100}vh` }}
      id="projects"
    >
      <motion.div
        style={{ y: pinY, perspective: "1500px" }}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full max-w-5xl h-[550px] flex items-center justify-center">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.label}
              index={index}
              total={PROJECTS.length}
              project={project}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Card = ({
  project,
  index,
  total,
  progress,
}: {
  project: any;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  // 1. DYNAMIC POSITIONING
  const activePosition = useTransform(progress, [0, start], [index, 0]);

  // 2. EXIT ANIMATION (numbers)
  const yExit = useTransform(progress, [start, end], [0, -1000]);

  // 3. STACK ANIMATION (numbers)
  const indices = PROJECTS.map((_, i) => i); // [0, 1, 2, 3] dynamically
  const offsets = PROJECTS.map((_, i) => i * 40); // spacing, e.g., 0, 50, 100, 150

  const stackY = useTransform(activePosition, indices, offsets);

  const scales = indices.map((i) => 1 - i * 0.08);
  const scale = useTransform(activePosition, indices, scales);

  const translateZs = indices.map((i) => i * -100);
  const translateZ = useTransform(activePosition, indices, translateZs);

  const rotateY = useTransform(progress, [start, end], [0, -45]);
  const rotateZ = useTransform(progress, [start, end], [0, -10]);
  // const opacity = useTransform(progress, [end - 0.1, end], [1, 0]);

  const finalY = useTransform(
    [stackY, yExit],
    ([sY, eY]: number[]) => `${sY + eY}px`
  );

  const [isDark, setIsDark] = useState<boolean>(true);
  const [cursorPosition, setCursorPosition] =
    useState<Record<string, number>>();

  useEffect(() => {
    // project.type !== "screen" &&
    isImageDark(project.thumbnail).then((dark) => setIsDark(dark));
  }, [project.thumbnail]);

  return (
    <motion.div
      style={{
        y: finalY,
        scale,
        z: translateZ,
        rotateY,
        rotateZ,
        // opacity,
        // backgroundColor: project.color,
        background: `url(${project.thumbnail})`,
        zIndex: total - index,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 rounded-[40px] shadow-2xl text-white"
      onMouseMove={(event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
      }}
      onMouseLeave={() => setCursorPosition(undefined)}
      onClick={() => {
        window.open(project.url, "_blank");
      }}
    >
      <div
        className="backdrop-blur-3xl w-full h-full p-12 flex flex-col justify-between rounded-[40px] cursor-pointer"
      >
        {project.type === "screen" ? (
          <div className="flex justify-center items-center h-full text-center">
            <Typography
              variant="newtitle"
              className={`${isDark ? "text-white!" : "text-black!"}`}
            >
              {project.label}
            </Typography>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start">
              <Typography
                variant="title"
                className={`${isDark ? "text-white!" : "text-slate-700!"}`}
              >
                {project.label}
              </Typography>
              <span
                className={`"text-xl font-mono opacity-50 ${
                  isDark ? "text-white!" : "text-black!"
                }`}
              >
                ({index + 1})
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-end">
              <div className="flex-1 space-y-4">
                <Typography
                  variant="subtitle"
                  className={`${isDark ? "text-white/60!" : "text-slate-600!"}`}
                >
                  {project.description}
                </Typography>
                {/* <button className="bg-white text-black font-bold py-3 px-8 rounded-full text-xs tracking-widest uppercase">
              See our case studies
            </button> */}
              </div>
              <div className="w-full md:w-[250px] h-40 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-sm">
                <img
                  className="w-full h-full object-cover object-top rounded-2xl"
                  src={project.thumbnail}
                  alt=""
                />
              </div>
            </div>
          </>
        )}

        {cursorPosition?.x && project.type !== "screen" && (
          <div
            className="fixed w-full h-full"
            style={{
              top: cursorPosition.y - 70,
              left: cursorPosition.x - 220,
            }}
          >
            <Typography
              variant="buttonText"
              className="bg-white inline-flex text-black! py-1 px-3 rounded-2xl"
            >
              VISIT WEBSITE <RiArrowRightUpLine size={18} />
            </Typography>
          </div>
        )}
      </div>
    </motion.div>
  );
};
