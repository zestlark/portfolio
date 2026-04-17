import { useEffect } from "react";
import { Typography } from "../core";
import { MaxWidthWrapper } from "../Wrappers";
import { useInView } from "react-intersection-observer";
import { useNavStyle } from "@/providers";
import { animate } from "animejs";
import "@/assets/styles/project.style.css";
import { PROJECTS as workSections } from "@/constants/common";

export const ProjectsComponents = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { toggleDark } = useNavStyle();
  useEffect(() => {
    if (!inView) {
      toggleDark(false);
      return;
    }
    toggleDark(true);
    const el = document.querySelector("#Optimotion") as HTMLElement;
    if (el) {
      el.style.transformOrigin = "top left";
    }
    animate("#Optimotion", {
      rotate: [-90, 0],
      opacity: [0, 1],
      easing: "ease-in-out",
      duration: 800,
    });
  }, [inView]);

  return (
    <div ref={ref} id="projects">
      <MaxWidthWrapper className="relative md:h-screen overflow-hidden">
        <div className="grid md:grid-cols-6 md:gap-10">
          <div className="h-full md:col-span-2 mt-44">
            <Typography
              className="text-center md:text-left md:absolute bottom-10 left-0"
              variant="title"
            >
              Projects
            </Typography>

            {workSections.map((section) => (
              <div
                key={section.title}
                className="mt-10 md:mt-0 last-of-type:mt-10 ml-0.5 md:ml-0"
              >
                <Typography variant="smallTitle" className="font-light! mb-3">
                  {section.title.split(" ")[0]}{" "}
                  <span className="playfair-font">
                    {section.title.split(" ")[1]}
                  </span>
                </Typography>
                <ul className="space-y-2">
                  {section.projects.map((project) => (
                    <li key={project.label}>
                      <a href={"#" + project.label}>
                        <Typography
                          variant="appText"
                          className="text-white/60 underline hover:text-white text-[16px]!"
                        >
                          {project.label}
                        </Typography>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="h-[600px] md:h-screen max-h-screen col-span-4 overflow-scroll"
            style={{ scrollBehavior: "smooth" }}
          >
            {workSections.map((section) =>
              section.projects.map((project) => (
                <div
                  key={project.label}
                  className="h-full group"
                  id={project.label}
                >
                  <div className="h-full pt-12 md:pt-44 pb-3 md:pb-14">
                    <div className="bg-gray-500/10 h-full rounded-3xl relative overflow-hidden project-card">
                      {/* blur image */}
                      <img
                        src={project.thumbnail}
                        className="h-full w-full object-cover absolute opacity-50 blur-3xl scale-150"
                        alt=""
                        loading="lazy"
                      />

                      <img
                        src={project.thumbnail}
                        className="h-[400px] md:h-[500px] w-full object-cover object-top-left md:object-center rounded-2xl border-2 border-black/20 project-image"
                        alt=""
                        loading="lazy"
                      />

                      {/* Chip */}
                      <div className="absolute bottom-5 left-5 group-hover:right-5 bg-white/10 group-hover:bg-black/50 group-hover:backdrop-blur-2xl  px-4 py-2 rounded-xl transition-all duration-300">
                        <div className="inline-flex justify-start items-center gap-3">
                          <span className="block w-2 h-2 bg-[#EA5B6F] rounded-full"></span>
                          {project.label}
                        </div>

                        <Typography
                          variant="subtitle"
                          className="overflow-hidden w-0 max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-30 group-hover:opacity-100 group-hover:w-full"
                        >
                          {project.description}
                        </Typography>
                      </div>

                      {/* <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black via-black to-transparent min-h-[300px] project-details">
                        <div className="absolute bottom-0 left-0 p-5">
                          <Typography
                            variant="smallTitle"
                            className="font-light! mb-3"
                          >
                            {project.label}
                          </Typography>

                          <Typography variant="subtitle">
                            {project.description}
                          </Typography>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
