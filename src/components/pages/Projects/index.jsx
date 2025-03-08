import React from "react";
import {DescriptionPage} from "./DescriptionPage";
import {ProjectCards} from "./ProjectCards";
import "./style.css"; // Ensure this file contains the CSS below

export const Projects = () => {
  return (
    <section className="">
      <DescriptionPage/>
      <ProjectCards/>
    </section>
  );
};
