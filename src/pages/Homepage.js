import React from "react";
import Navbar from "../components/Navbar";
import {
  Home,
  About,
  Experience,
  Work,
  AdditionalProject,
  Contact,
} from "./index";
import useAos from "../hooks/useAos";

const Homepage = () => {
  useAos();
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <AdditionalProject />
      <Contact />
    </div>
  );
};

export default Homepage;
