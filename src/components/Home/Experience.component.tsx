import { useInView } from "react-intersection-observer";
import { MaxWidthWrapper } from "../Wrappers";
import { ExperienceCard, Typography } from "../core";

import BG_MOUNTAIN from "@/assets/png/bg-mountain.png";

export const ExperienceComponent = () => {
  const { ref } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });



  const stats = [
    {
      id: 1,
      value: "02+",
      label: "Years of Experience",
      description:
        "Working across startups and freelance with strong focus on design + dev.",
      imageUrl:
        "https://images.unsplash.com/photo-1655043753615-77f81ee10141?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      value: "06+",
      label: "Projects Shipped",
      description: "From interactive landing pages to full-scale web apps.",
      imageUrl:
        "https://images.unsplash.com/photo-1573350926865-cf0d512fd504?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      value: "10+",
      label: "Clients Worked With",
      description:
        "Startups, founders, NGOs, and creators across 3+ countries.",
      imageUrl:
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // {
    //   id: 4,
    //   value: "95%",
    //   label: "Client Satisfaction",
    //   description:
    //     "Strong feedback loop & repeat business through quality delivery.",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];



  // useEffect(() => {
  //   const el = document.querySelector(".stats-parent") as HTMLElement;
  //   if (!inView) {
  //     el.style.gap = "0px";
  //     animate(".experience-stats", {
  //       borderRadius: [10, 0],
  //       duration: 3000,
  //       fill: "forwards",
  //     });
  //     return;
  //   }
  //   el.style.gap = "30px";

  //   animate(".experience-stats", {
  //     borderRadius: [0, 10],
  //     duration: 3000,
  //     fill: "forwards",
  //   });
  // }, [inView]);

  return (
    <div
      ref={ref}
      id="main-about-container"
      className="min-h-screen relative mb-20 md:mb-0 my-[30vh]"
    >
      <div className="bg-linear-to-tr from-black to-black/50">
        <MaxWidthWrapper className="relative h-fit md:h-screen">
          {/* <Typography
            className="text-center md:text-left md:absolute bottom-10 left-0 wrap-break-word my-10 pt-10"
            variant="title"
          >
            Experience
          </Typography> */}
          {/* <Typography
            className="!text-center md:text-left wrap-break-word my-10 pt-10"
            variant="newtitle"
          >
            Experience
          </Typography> */}

          <div className="h-32 w-full flex flex-col items-center justify-center relative z-10 mb-10">
            <Typography variant="newtitle">Experience</Typography>
            <Typography variant="subtitle">
              Consistent delivery, proven results
            </Typography>
          </div>
          <div className="md:absolute top-[45%] md:-translate-y-1/2 left-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:h-[300px]">
              {stats.map((stat) => (
                <ExperienceCard
                  key={stat.id}
                  count={stat.value}
                  title={stat.label}
                  description={stat.description}
                  imageUrl={stat.imageUrl}
                />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div
        className="h-[200px] w-screen absolute -bottom-[200px] z-0"
        style={{
          background: `url(${BG_MOUNTAIN})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          rotate: "190deg",
          filter: "blur(100px) contrast(1.1)",
          scale: 1.5,
        }}
      />
    </div>
  );
};
