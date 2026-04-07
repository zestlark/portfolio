// components/LenisWrapper.tsx
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface LenisWrapperProps {
  children: React.ReactNode;
}

export const LenisWrapper: React.FC<LenisWrapperProps> = ({ children }) => {
  // const lenisRef = useRef<Lenis | null>(null);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2.2,
  //     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     gestureOrientation: "vertical",
  //     wheelMultiplier: 1,
  //     touchMultiplier: 1,
  //   });

  //   lenisRef.current = lenis;

  //   const raf = (time: number) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  // return <div id="snap-scroll">{children}</div>;
  return (
    <ReactLenis options={{ duration: 2 }} root>
      {children as any}
    </ReactLenis>
  );
};
