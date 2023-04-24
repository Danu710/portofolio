import useMediaQuery from "../hooks/useMediaQuery";
import React from "react";
import { Container, Tag } from "../components/index";
import { Link } from "react-router-dom";
import Decoration from "../image/decoration.png";
import Project1 from "../image/project1.png";
import Project2 from "../image/project2.png";
import Project3 from "../image/project3.png";

function DetailProject(props) {
  return (
    <div>
      <p className="font-mono text-sm text-lightGreen">{props.title}</p>
      <p className="font-sans font-bold">{props.nameApp}</p>
      <div className="p-4 mt-2 rounded-lg bg-white/10">
        <p className="text-white/70">{props.description}</p>
      </div>
      <div className="flex flex-wrap mt-2 gap-y-2">
        {props.tags.map((tag, index) => {
          return <Tag name={tag} key={index} className="mr-2" />;
        })}
      </div>
    </div>
  );
}

const Work = () => {
  const isMobile = useMediaQuery(768);
  return (
    <Container id="menu.word" className="py-10 pt-24 sm:py-24 md:mb-24">
      <div
        data-aos="fade-up"
        className="flex items-center col-span-12 mb-4 font-sans text-2xl font-bold text-gray-200 whitespace-nowrap">
        <span className="pr-2 font-mono text-lg text-lightGreen">#3.</span>
        {isMobile ? (
          <h3>{`My Work's`} ⚡</h3>
        ) : (
          <h3>{`Some Things I've Develop`} ⚡</h3>
        )}
      </div>
      <div className="grid grid-cols-12 col-span-12 gap-y-0 md:gap-y-20">
        <div className="grid grid-cols-12 col-span-12 gap-y-0 md:gap-y-20">
          <Link
            data-aos="fade-up"
            data-aos-offset="400"
            to="https://yotubeclone.netlify.app/"
            className="flex items-center justify-center col-span-12 py-5 pr-5 md:col-span-6">
            <img
              src={Project1}
              alt="gredu belajar"
              width={429}
              height={244}
              quality={100}
            />
          </Link>
          <div
            data-aos="fade-up"
            className="flex items-center col-span-12 mb-10 md:col-span-6 sm:mb-0">
            <DetailProject
              nameApp="Youtube Clone"
              description="the youtube clone made by Rapid API is almost the same as youtube in general, you can see and watch youtube videos without ads like youtube premium "
              tags={[
                "React",
                "Material UI",
                "Talwind CSS",
                "Axios",
                "React-Router-Dom",
              ]}
            />
          </div>
          <div
            data-aos="fade-up"
            className="order-last col-span-12 mb-10 md:col-span-6 md:order-none sm:mb-0">
            <DetailProject
              nameApp="Ikea Clone"
              // eslint-disable-next-line max-len
              description="the ikea clone web works like the ecommerce web in general, this web is only the front end, it's not connected to the database"
              tags={["React", "Tailwind CSS", "Redux", "React Hooks"]}
            />
          </div>
          <Link
            data-aos="fade-up"
            data-aos-offset="400"
            to="https://ikeashopclone.netlify.app/"
            className="flex justify-end col-span-12 py-5 pl-5 md:col-span-6">
            <img
              src={Project2}
              alt="gredu teacher"
              width={429}
              height={244}
              quality={100}
            />
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-offset="400"
            to="https://travel-property-liard.vercel.app/"
            className="flex items-center justify-center col-span-12 py-5 pr-5 md:col-span-6">
            <img
              src={Project3}
              alt="gredu belajar"
              width={429}
              height={244}
              quality={100}
            />
          </Link>
          <div
            data-aos="fade-up"
            className="flex items-center col-span-12 mb-10 md:col-span-6 sm:mb-0">
            <DetailProject
              nameApp="Travel app"
              description="The travel web app makes it easy for travellers to find hotels or inns that the API wants to visit from the Rapid API"
              tags={["Next js", "Tailwind CSS", "Material UI", "React Hooks"]}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
