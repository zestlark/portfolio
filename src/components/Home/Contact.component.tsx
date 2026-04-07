
import { Typography } from "../core";
import { MaxWidthWrapper } from "../Wrappers";
import FOOTER_MOUNTAIN_NIGHT from "@/assets/png/footer-mountain-night.png";

import React, { useEffect } from "react";
import { zestlark_products, zestlark_social } from "@/constants";

const STAR_COUNT = 200;
const STAR_SIZE = 2;

const StarrySky = ({ style }: { style?: React.CSSProperties }) => {
  useEffect(() => {
    const sky = document.querySelector(".sky");

    const random = (range: number, unit = "") =>
      `${Math.floor(Math.random() * range) + 1}${unit}`;

    const createStar = () => {
      const star = document.createElement("div");
      star.classList.add("absolute", "rounded-full");

      const blinkType = Math.floor(Math.random() * 5) + 1;
      star.style.animation = `blink${blinkType} 4s infinite`;

      const size = random(STAR_SIZE, "px");
      star.style.width = size;
      star.style.height = size;
      star.style.left = random(window.innerWidth, "px");
      star.style.top = random(window.innerHeight, "px");
      star.style.backgroundColor = "white";

      sky?.appendChild(star);
    };

    while (sky?.firstChild) sky.removeChild(sky.firstChild);
    for (let i = 0; i < STAR_COUNT; i++) createStar();
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink1 {
          0%, 100% { opacity: 1; }
          20% { opacity: 0; }
        }
        @keyframes blink2 {
          0%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
        @keyframes blink3 {
          0%, 100% { opacity: 1; }
          60% { opacity: 0; }
        }
        @keyframes blink4 {
          0%, 100% { opacity: 0; }
          80% { opacity: 1; }
        }
        @keyframes blink5 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div
        style={style}
        className="sky relative w-full h-[130vh] overflow-hidden bg-linear-to-t from-[#848ab0] via-[#1d3656] to-[#000]"
      ></div>
    </>
  );
};

export default StarrySky;

export const ContactComponent = () => {
  const contactFooter = [
    {
      title: "Products",
      items: zestlark_products,
    },
    {
      title: "Support",
      items: [
        { name: "faq" },
        { name: "privacy policy" },
        { name: "Terms & Agreements" },
      ],
    },
  ];
  return (
    <div className="relative">
      <div className="absolute bottom-0 z-20 w-full pb-[100px]">
        <MaxWidthWrapper className="relative h-fit md:px-0!">
          <div className="grid md:grid-cols-5 gap-10 md:gap-4">
            <div className="col-span-2">
              <Typography
                variant="title"
                className="text-3xl! text-white! text-shadow-white text-shadow-[0 0 10px white]"
                style={
                  {
                    //   textShadow: "0 0 3px white",
                  }
                }
              >
                Hi, I'm{" "}
                <span className="playfair-font text-white">
                  Deepak Kanojiya 👋
                </span>{" "}
              </Typography>
              <Typography variant="subtitle" className="mt-6     text-[15px]!">
                If you are interested in discussing a{" "}
                <span className="playfair-font text-white">
                  potential project
                </span>{" "}
                or have any further questions, I would be happy to hear from
                you. Please feel free to use the contact form on my website to{" "}
                <span className="playfair-font text-white">
                  send me a message
                </span>
                , or you can email me
              </Typography>
            </div>
            <div className="col-span-2 md:col-span-1"></div>
            {contactFooter.map((cf) => (
              <ul key={cf.title}>
                <Typography variant="smallTitle" className="mb-3 text-[17px]!">
                  {cf.title}
                </Typography>
                {cf.items.map((ci) => (
                  <li key={ci.name} className="py-1 cursor-pointer">
                    <Typography
                      variant="appText"
                      className="text-white/60 transition-all duration-200 hover:text-white hover:underline"
                    >
                      {ci.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="relative h-[300px]">
          <Typography
            className="text-center md:text-left md:absolute bottom-10 left-0 wrap-break-word my-10 pt-10"
            variant="newtitle"
          >
            Contact
          </Typography>
          {/* social icons */}
          <div
            id="contact"
            className="md:absolute bottom-10 right-0 my-10 pt-10 inline-flex gap-3 w-full md:w-fit justify-center"
          >
            {zestlark_social.map((s) => (
              <s.icon
                size={28}
                key={s.title}
                className="cursor-pointer p-1 hover:bg-gray-200/10"
                onClick={() => window.open(s.link, "_blank")}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
      {/* bottom */}

      <StarrySky />
      <div
        className="h-screen bg-red-500 w-screen absolute bottom-0 z-10"
        style={{
          background: `url(${FOOTER_MOUNTAIN_NIGHT})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};
