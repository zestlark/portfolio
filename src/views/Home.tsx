import {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  HeroComponent,
  LenisWrapper,
  NavComponent,
  SkillsComponent,
} from "@/components";
import { ProjectsComponentsStack } from "@/components/Home/Project.component.stack";

export const Home = () => {
  return (
    <LenisWrapper>
      <div className="w-screen overflow-x-hidden">
        <NavComponent />
        <HeroComponent />
        <AboutComponent />
        <ExperienceComponent />
        {/* <ProjectsComponents /> */}
        <SkillsComponent />
        <ProjectsComponentsStack />
        {/* <AboutComponent /> */}
        <ContactComponent />
      </div>
    </LenisWrapper>
  );
};
