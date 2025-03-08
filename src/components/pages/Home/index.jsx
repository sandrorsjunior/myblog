import React from "react";
import {HowIAm} from "./HowIAm";
import {MainProjects} from "./MainProjects";
import {Articles} from "./Articles";
import {WorkExperience} from "./WorkExperience";
import "./style.css"; // Ensure this file contains the CSS below

export const Home = () => {
  return (
    <section className="">
      <HowIAm/>
      <MainProjects/>
      <div className="row mt-5">
        <Articles />
        <WorkExperience />
      </div>
    </section>
  );
};
