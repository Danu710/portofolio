import React, { useState, useCallback } from "react";
import { Container, Tabs, OccupationTitle, List } from "../components/index";
import { COMPANY, COMPANY1, EXPERIENCE, EXPERIENCE1 } from "../utils/constants";

const Experience = () => {
  const [currentTab, setCurrentTab] = useState(COMPANY.GREDU);
  const [currentTabs, setCurrentTabs] = useState(COMPANY.GANESA);

  const handleTab = useCallback((menu) => {
    setCurrentTab(menu);
  }, []);

  const handleTabs = useCallback((menu) => {
    setCurrentTabs(menu);
  }, []);

  return (
    <Container id="menu-experience" className="pt-24 md:mb-24">
      <div
        data-aos="fade-up"
        className="flex items-center justify-center col-span-12 mb-4 font-sans text-2xl font-semibold text-gray-200">
        <span className="pr-2 font-mono text-lg text-lightGreen">#2.</span>
        <h3>{`Work Experiences ⚡`}</h3>
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
              <div>
                <OccupationTitle
                  title="Fullstack Web Developer Internship"
                  company="BTPN Syariah"
                  start="Mei 2023"
                  end="Present"
                />
                <div className="mt-4">
                  <List>
                    Finishing various task related with the activity of
                    Fullstack Developer from BTPN Syariah
                  </List>
                  <List>
                    Creating Rest Full api with Golang Authentication
                    Authorization user & CRUD user
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
