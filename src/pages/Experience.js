import React, { useState, useCallback } from "react";
import { Container, Tabs, OccupationTitle, List } from "../components/index";
import { COMPANY, EXPERIENCE } from "../utils/constants";

const Experience = () => {
  const [currentTab, setCurrentTab] = useState(COMPANY.GREDU);

  const handleTab = useCallback((menu) => {
    setCurrentTab(menu);
  }, []);

  return (
    <Container id="menu-experience" className="pt-24 md:mb-24">
      <div
        data-aos="fade-up"
        className="flex items-center justify-center col-span-12 mb-4 font-sans text-2xl font-semibold text-gray-200">
        <span className="pr-2 font-mono text-lg text-lightGreen">#2.</span>
        <h3>{`Where I've worked ⚡`}</h3>
      </div>
      <div data-aos="fade-up" className="col-span-12 mt-4">
        <div className="mx-auto">
          <div className="grid grid-cols-12 font-mono w-12/12">
            <Tabs
              menu={EXPERIENCE}
              currentActive={currentTab}
              onChange={handleTab}
            />
            <div className="col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-9 sm:mt-0">
              {currentTab === COMPANY.GREDU && (
                <div>
                  <OccupationTitle
                    title="IT Operation | DKV"
                    company="@smkganesasatria2depok"
                    start="July 2022"
                    end="Present"
                  />
                  <div className="mt-4">
                    <List>
                      Create logo designs for social media content and other
                      designs
                    </List>
                    <List>
                      Perform troubleshooting and resolve network and system
                      hardware problems
                    </List>
                    <List>Create a school blog</List>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
