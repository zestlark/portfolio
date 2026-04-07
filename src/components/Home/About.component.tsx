import { useEffect } from "react";
import BirdAndBranch from "@/assets/svg/bird-and-branch.svg?react";
import { animate } from "animejs";
import { useInView } from "react-intersection-observer";
import { MaxWidthWrapper } from "../Wrappers";
import { Typography } from "../core";

export const AboutComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (!inView) return;
    animate("#main-about-container svg use", {
      translateX: ["105%", "0%"],
      scale: [0, 1],
      opacity: [0, 1],
    });

    animate("#main-about-container svg path", {
      translateY: ["100%", "0px"],
      opacity: [0.5, 1],
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      id="main-about-container"
      className="md:min-h-screen relative z-20"
    >
      {/* <div className="h-[200px] md:h-[70%] absolute left-1/2 -translate-x-1/2 bottom-0 bg-white/10 w-[300px]"></div> */}
      <div className="h-[300px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 bg-white/30 w-[300px] blur-3xl rounded-full"></div>
      <BirdAndBranch className="w-[500px] h-[400px] md:w-[1200px] md:h-screen md:absolute left-1/2 md:-translate-x-1/2 bottom-0 md:-bottom-8 -ml-24 md:-ml-10" />

      <MaxWidthWrapper className="relative md:h-screen">
        <Typography
          className="text-center md:text-left md:absolute top-40 left-0"
          variant="newtitle"
        >
          About
        </Typography>

        <Typography
          className="text-center md:text-left mt-20 md:mt-0 md:absolute top-1/2  left-0 md:max-w-[400px] text-white/70!"
          variant="subtitle"
        >
          I see the world in shades of possibility, not black and white. I’m
          driven by{" "}
          <span className="playfair-font px-2 font-bold text-white">
            curiosity
          </span>{" "}
          and guided by a strong moral compass, building with{" "}
          <span className="playfair-font px-2 font-bold text-white">
            passion
          </span>{" "}
          and intention at every turn.
        </Typography>

        <Typography
          className="text-center mt-10 md:mt-0 md:text-left md:absolute bottom-10 right-50 md:translate-x-1/2 md:max-w-[400px]"
          variant="subtitle"
        >
          Challenges become invitations to craft thoughtful experiences where
          clarity of{" "}
          <span className="playfair-font text-white">vision and integrity</span>{" "}
          inform each choice. By marrying insight with imagination, I strive to
          create work that uplifts, connects, and{" "}
          <span className="playfair-font text-white">
            endures beyond the first glance.
          </span>
        </Typography>
      </MaxWidthWrapper>
    </div>
  );
};
