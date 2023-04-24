import React from "react";
import useAos from "../hooks/useAos";
import Navbar from "../components/Navbar";
import { Experience, Contact } from "./index";

const ExperiencePage = () => {
  useAos();
  return (
    <div>
      <Navbar />
      <Experience />
      <Contact />
    </div>
  );
};

export default ExperiencePage;
