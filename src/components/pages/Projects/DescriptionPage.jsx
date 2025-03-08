import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope  } from "react-icons/fa";
import "./style.css"; // Ensure this file contains the CSS below

export const DescriptionPage = () => {
  return (
      <div className="row justify-content-start align-items-start text-center text-md-start">
        {/* Left Section: Introduction */}
        <div className="left-side col-md-8 col-12 ">
          <h1 className="mb-3 ">
            I’m Tharindu N. I live in Sri Lanka, where I design the future.
          </h1>
          <p>
            I've worked on a variety of projects over the years, and I'm proud
            of the progress I've made. Many of these projects are open-source
            and available for others to explore and contribute to.
          </p>
          <p>
            If you're interested in any of the projects I've worked on, feel
            free to check out the code and suggest improvements. Collaboration
            is a great way to grow, and I'm always open to new ideas and
            feedback.
          </p>
        </div>
      </div>
  );
};
