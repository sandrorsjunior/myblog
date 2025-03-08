import React from "react";
import {HowIAm} from "./HowIAm";
import {MainProjects} from "./MainProjects";
import "./style.css"; // Ensure this file contains the CSS below

export const Home = () => {
  return (
    <section className="">
      <HowIAm/>
      <MainProjects/>
    </section>
  );
};
