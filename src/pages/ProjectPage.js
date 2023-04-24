import React from "react";
import Navbar from "../components/Navbar";
import { AdditionalProject, Work, Contact } from "./index";
import useAos from "../hooks/useAos";

const ProjectPage = () => {
  useAos();
  return (
    <div>
      <Navbar />
      <Work />
      <AdditionalProject />
      <Contact />
    </div>
  );
};

export default ProjectPage;
