import React from "react";
import { Container, Card } from "../components/index";

const AdditionalProject = () => {
  return (
    <Container id="additional_project">
      <div className="flex items-center justify-center col-span-12 mb-4 font-sans text-xl font-bold text-gray-200 md:mb-10">
        <h3>Another my project in my github</h3>
      </div>
      <div className="grid grid-cols-12 col-span-12 gap-4">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          className="col-span-12 md:col-span-4">
          <Card
            title="DALL-E"
            description="Clone DALL-E DALL-E web is an AI (Artificial Intelligence) program created by OpenAI in early 2021."
            tags={["Fullstack", "MongoDB", "ExpressJS", "NodeJS", "ReactJS"]}
            github="https://github.com/Danu710/dall-e"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          className="col-span-12 md:col-span-4">
          <Card
            title="React Crypto App"
            description="React Crypto React crypto app makes it easy to keep informed about today's crypto developments"
            tags={["React", "CSS"]}
            github="https://github.com/Danu710/react-crypto"
            link="https://cryptohomepage.netlify.app/"
          />
        </div>
      </div>
    </Container>
  );
};

export default AdditionalProject;
