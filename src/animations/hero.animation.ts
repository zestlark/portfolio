import { getResponsiveValue } from "@/constants";
import { animate, eases, stagger } from "animejs";

export function heroAnimation() {
  const padding =
    getResponsiveValue({
      xs: "16px",
      sm: "24px",
      md: "48px",
    }) ?? "16px";

  animate("#main-hero-container", {
    padding: [0, padding],
    duration: 1000,
    easing: eases.inOutElastic(1, 0.3),
  });
  animate(".title", {
    translateX: ["-100%", "0px"],
    opacity: [0, 1],
    duration: 800,
    delay: stagger(500),
    easing: eases.inOutElastic(1, 0.3),
  });
  animate(".sub-title", {
    translateX: ["-100%", "0px"],
    opacity: [0, 1],
    duration: 800,
    delay: 1000,
    easing: eases.inOutElastic(1, 0.3),
  });
  animate(".profile-image,.profile-image-shadow", {
    translateY: ["100%", "0px"],
    scale: [0.2, 1],
    duration: 2500,
    delay: 500,
    easing: eases.inOutElastic(1, 0.3),
  });
  animate(".quick-app-container", {
    translateX: ["100%", "0px"],
    duration: 100,
    delay: 200,
    easing: eases.inOutElastic(1, 0.3),
  });
  animate(".quick-app-list", {
    translateX: ["100%", "0px"],
    duration: 700,
    delay: stagger(500),
    easing: eases.inOutElastic(1, 0.3),
  });
}
