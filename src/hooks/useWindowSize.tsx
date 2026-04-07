import { useState, useEffect } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler that sets the window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Check if window is available (for SSR safety)
    if (typeof window !== "undefined") {
      handleResize(); // Set initial size
      window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
