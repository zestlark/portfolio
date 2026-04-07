import LOGO from "@/assets/png/logo.png";
import clsx from "clsx";
import type { FC } from "react";
import { RiHomeLine, RiSendPlaneLine, RiFolder5Line } from "@remixicon/react";
import GlareHover from "./core/GlareHover/GlareHover";
import { useNavStyle } from "@/providers";
import { useLenis } from "@studio-freight/react-lenis";
import { ResumeDownloadButton } from "./core";

export const GlareWrapper: FC<{
  children: React.ReactNode;
  className?: string;
  gloreColor?: string;
}> = ({ children, className, gloreColor = "#ffffff66" }) => (
  <GlareHover
    glareColor={gloreColor}
    glareOpacity={0.3}
    glareAngle={-30}
    transitionDuration={800}
    playOnce={false}
    className={clsx(
      "h-fit! w-fit! bg-transparent! border-none! rounded-full!",
      className,
    )}
  >
    {children}
  </GlareHover>
);

export const iconClassName = "w-5 h-5 md:w-4 md:h-4";

export const NavComponent = () => {
  const { isDark, isMaxWidth } = useNavStyle();

  const links = [
    {
      label: "Home",
      to: "#home",
      icon: <RiHomeLine className={iconClassName} />,
    },
    {
      label: "Projects",
      to: "#projects",
      icon: <RiFolder5Line className={iconClassName} />,
    },
    {
      label: "Contact",
      to: "#contact",
      icon: <RiSendPlaneLine className={iconClassName} />,
    },
  ];
  const bgColor = isDark ? "bg-black/30" : "bg-white/30";
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    const target = document.querySelector(to) as HTMLElement;
    if (target) {
      lenis?.scrollTo(target, { duration: 2 });
    }
  };

  return (
    <div
      className={clsx(
        "fixed top-10 md:top-10 left-1/2 -translate-x-1/2 z-30 w-full flex justify-between transition-all duration-500",
        isMaxWidth ? "max-w-7xl px-8" : "max-w-full px-8 sm:px-12 md:px-18",
      )}
    >
      <GlareWrapper>
        <div
          className={clsx(
            "h-12 w-12 flex justify-center items-center rounded-full",
            bgColor,
          )}
        >
          <img alt="" src={LOGO} className="invert w-7" />
        </div>
      </GlareWrapper>

      <div
        className={clsx(
          "h-12 w-fit flex justify-center items-center rounded-full px-0 sm:absolute left-1/2 sm:-translate-x-1/2",
          bgColor,
        )}
      >
        {links.map((link) => (
          <GlareWrapper key={link.label}>
            <a
              key={link.label}
              href={link.to}
              onClick={(e) => handleScroll(e, link.to)}
              className="w-12 md:w-28 h-full min-h-12 rounded-full hover:bg-black/30 transition-all duration-200 text-center text-sm flex items-center gap-2 justify-center"
            >
              {link.icon}
              <span className="hidden md:inline-block">{link.label}</span>
            </a>
          </GlareWrapper>
        ))}
      </div>

      <div className="hidden sm:block">
        <ResumeDownloadButton iconClassName={iconClassName} />
      </div>
    </div>
  );
};
