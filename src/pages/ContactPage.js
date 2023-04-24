import React from "react";
import Navbar from "../components/Navbar";
import { Contact } from "./index";
import useAos from "../hooks/useAos";

const ContactPage = () => {
  useAos();
  return (
    <div>
      <Navbar />
      <Contact />
    </div>
  );
};

export default ContactPage;
