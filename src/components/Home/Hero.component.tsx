import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavStyle } from "@/providers";
import { ResumeDownloadButton, Typography } from "../core";
import BG_PARALLEX from "@/assets/png/bg-full.png";
import BG_MOUNTAIN from "@/assets/png/bg-mountain.png";
import { zestlark_products } from "@/constants";
import { iconClassName } from "../Nav.components";

export const HeroComponent = () => {
  const { toggleMaxWidth, toggleDark } = useNavStyle();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      toggleMaxWidth(false);
      toggleDark(true);
      return;
    }
    toggleMaxWidth(true);
    toggleDark(false);
  }, [inView]);

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-screen" ref={ref} id="home">
      {/* hero background */}
      <div
        className="h-screen w-screen absolute bottom-0"
        style={{
          backgroundImage: `url(${BG_PARALLEX})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      <div
        className="h-[55vh] bg-red-500 w-screen absolute bottom-0 z-20"
        style={{
          background: `url(${BG_MOUNTAIN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="h-screen bg-red-500 w-screen absolute top-full z-20"
        style={{
          background: `url(${BG_MOUNTAIN})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          rotate: "180deg",
          filter: "blur(40px) contrast(1.2)",
          scale: 1.5,
        }}
      />

      {/* hero title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {/* <div className="flex items-center justify-center mb-5">
          <Typography
            variant="buttonText"
            className="text-center text-[16px] bg-gray-700/10 p-2 px-4 rounded-full text-white/40 font-bold!"
          >
            Sleek UI, Solid Engineering
          </Typography>
        </div> */}
        <Typography variant="title" className="text-center">
          Passion Precision <span className="playfair-font">&</span>
          <span className="playfair-font text-orange-300"> Perfection.</span>
        </Typography>

        <div className="relative mx-auto mt-10 sm:hidden flex justify-center">
          <ResumeDownloadButton iconClassName={iconClassName} />
        </div>
      </div>

      {/* products */}
      <div className="w-screen absolute top-[calc(100%-120px)] z-20">
        <div className="bg-linear-to-r from-transparent via-orange-300/30 to-transparent flex items-center justify-center gap-6 md:gap-12 h-[60px]">
          {zestlark_products.map((data) => (
            <div
              key={data.name}
              className="inline-flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => window.open(data.link, "_blank")}
            >
              <img alt="" src={data.image} className="w-8 h-8 rounded-full" />
              <Typography variant="appText">{data.name}</Typography>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <Typography variant="buttonText" className="text-white/80">
            Products by zestlark.
          </Typography>
        </div>
      </div>
    </div>
  );
};
