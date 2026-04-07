import {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  HeroComponent,
  LenisWrapper,
  NavComponent,
  SkillsComponent,
  Loader,
} from "@/components";
import { ProjectsComponentsStack } from "@/components/Home/Project.component.stack";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Small delay for smooth feel
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <LenisWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-screen overflow-x-hidden"
        >
          <NavComponent />
          <HeroComponent />
          <AboutComponent />
          <ExperienceComponent />
          {/* <ProjectsComponents /> */}
          <SkillsComponent />
          <ProjectsComponentsStack />
          {/* <AboutComponent /> */}
          <ContactComponent />
        </motion.div>
      </LenisWrapper>
    </>
  );
};
