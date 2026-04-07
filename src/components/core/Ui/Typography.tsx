import React from "react";
import clsx from "clsx";

type Variant =
  | "title"
  | "newtitle"
  | "dotTitle"
  | "subtitle"
  | "smallTitle"
  | "appText"
  | "quickAppLabel"
  | "buttonText";

interface TypographyProps {
  children: React.ReactNode;
  variant: Variant;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

const baseClasses: Record<Variant, string> = {
  title:
    "text-[55px] sm:text-[70px] md:text-[70px] lg:text-[70px] leading-[1.1]",
  newtitle:
    "text-[55px] sm:text-[70px] md:text-[70px] lg:text-[70px] leading-[1.1] playfair-font",
  dotTitle:
    "text-[100px] sm:text-[100px] md:text-[70px] lg:text-[100px] leading-[1.1] dot-fonts text-center md:text-left -translate-x-1",
  subtitle: "text-base md:text-lg font-normal leading-relaxed text-white/80",
  smallTitle: "text-[24px] font-light",
  appText: "text-sm font-normal leading-normal text-blue-gray-900",
  quickAppLabel: "text-xs bg-red-500 p-1 px-2 rounded-full w-fit",
  buttonText: "text-sm font-medium flex gap-2 items-center",
};

const defaultTagMap: Record<Variant, keyof React.JSX.IntrinsicElements> = {
  title: "h1",
  newtitle: "h1",
  dotTitle: "h1",
  subtitle: "p",
  smallTitle: "h5",
  appText: "p",
  quickAppLabel: "div",
  buttonText: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  className,
  as,
  style,
}) => {
  const Component = as || defaultTagMap[variant];
  return (
    <Component className={clsx(baseClasses[variant], className)} style={style}>
      {children}
    </Component>
  );
};
