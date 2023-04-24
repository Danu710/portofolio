import React from "react";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import ramadhanukadir from "../image/ramadhanukadir.pdf";
import { Container, Button } from "../components/index";

const Home = () => {
  const onButtonClick = () => {
    fetch("ramadhanukadir.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ramadhanukadir.pdf";
        alink.click();
      });
    });
  };

  return (
    <Container>
      <div className="flex flex-col items-start justify-center min-h-screen col-span-12">
        <p className="pb-3 font-mono text-lightGreen">Hi 👋 , my name is</p>
        <h1 className="font-sans text-2xl font-bold tracking-wide text-gray-300 lg:text-4xl xl:text-6xl">
          Ramadhanu Kadir Rachono
          <br />
          {`I'm a Frontend Developer`}
        </h1>
        <div className="sm:w-8/12 md:w-8/12">
          <p className="mt-4 text-gray-400">
            Detail-oriented Front End Developer with more than 1 years
            experience working with HTML, CSS, Javascript, React, Nextjs, Highly
            adept at both independent and collaborative projects
          </p>
        </div>
        <Link to={ramadhanukadir} target="_blank">
          <Button className="flex items-center px-6 mt-5 font-mono animate-bounce w-200 h-50">
            My Resume{" "}
            <div className="ml-2">
              <DownloadIcon sx={{ size: 20 }} />
            </div>
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
