import React from "react";
import { Skills } from "../utils/constants";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import profile from "../image/profile.jpeg";
import Container from "../components/Container";
import useBrowserAgent from "../hooks/useBrowserAgents";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const { isSafari } = useBrowserAgent();
  const { isMobile } = useMediaQuery(768);

  return (
    <Container id="menu.about" className="pt-24 mb-80 md:mb-20">
      <div
        data-aos="fade-up"
        className="flex items-center col-span-12 mb-4 font-sans text-2xl font-bold text-gray-200">
        <span className="pr-2 font-mono text-lg text-lightGreen">#1.</span>
        <h3>About Me ⚡</h3>
      </div>
      <div data-aos="fade-up" className="col-span-12 mb-20 md:col-span-8">
        <p className="font-sans text-white/70 md:pr-10">
          Hi, {`I'm `}Danu My interests are in Front End Engineering, and I love
          to create beautiful and performant products with delightful user
          experiences.
        </p>

        <p className="mt-3 font-sans text-white/70 md:pr-10">
          Here are a few technologies that I’ve been used recently:
        </p>

        <div className="grid grid-flow-col grid-rows-3 gap-1 mt-3 font-sans text-white/70">
          {Skills.map((skill, index) => {
            return (
              <p key={index} className="flex items-center text-sm">
                <KeyboardDoubleArrowRightIcon size={10} />
                {skill.languages}
              </p>
            );
          })}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="relative flex justify-center col-span-12 md:col-span-4 md:items-center">
        <div className="absolute z-10 transition-all duration-300 ease-in-out md:right-0 md:mr-10 md:hover:mr-5 md:hover:-mt-5">
          <img
            src={profile}
            alt="profile"
            width={180}
            height={150}
            quality={100}
            className="rounded-lg"
          />
        </div>
        {!(isSafari && isMobile) && (
          <div className="absolute z-0 w-48 h-64 mt-5 mr-5 border-2 border-white rounded md:right-0 md:-mt-10 md:mr-0 md:ml-5 md:mb-10" />
        )}
      </div>
    </Container>
  );
};

export default About;
