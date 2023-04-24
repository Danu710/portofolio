import React from "react";
import { useState } from "react";
import { logo, Menu, MENU } from "../utils/constants";
import danu from "../image/danu.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed z-20 flex items-center justify-between w-full px-5 md:px-12 bg-darkBlue">
      <div>
        <Link to="/">
          <img src={danu} width={100} alt="logo" quality={100} />
        </Link>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="absolute text-xl cursor-pointer right-8 md:hidden">
        {open ? (
          <CloseIcon style={{ color: "white" }} />
        ) : (
          <MenuIcon style={{ color: "white" }} />
        )}
      </div>

      <ul
        className={`flex flex-col sm:flex-row font-mono text-xs items-start justify-start absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 md:pt-0 pt-5 transition-all duration-500 ease-in bg-darkBlue ${
          open ? "top-20" : "top-[-500px]"
        }`}>
        {Menu.map((link, index) => (
          <li
            key={link.name}
            className="mb-10 ml-0 capitalize sm:ml-10 sm:mb-0">
            <Link
              to={link.link}
              className="text-white duration-500 hover:text-gray-400">
              <span className="pr-2 text-lightGreen">{index + 1}.</span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar2;
