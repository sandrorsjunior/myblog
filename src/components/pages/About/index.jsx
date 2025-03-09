import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope  } from "react-icons/fa";
import "./style.css"; // Ensure this file contains the CSS below
import {Timeline} from "../../TimeLine/TimeLine"

export const About = () => {
  return (
    <section className="">
      <div className="row justify-content-center align-items-start text-center text-md-start">
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

        {/* Right Section: Profile Image & Social Media */}
        <div className="right-side col-md-4 col-12 d-flex flex-column align-items-center mt-4 mt-md-0">
          <img
            src="..\src\assets\logo.png"
            alt="Tharindu N."
            className="rounded-5 img-fluid mb-3 rotated-img"
          />

          {/* Social Media Links */}
          <div className="social-links d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/tharindu-n"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 linkedin"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://github.com/tharindu-n"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 github"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://medium.com/@tharindu-n"
              target="_blank"
              rel="noopener noreferrer"
              className="medium me-3"
            >
              <FaMedium size={35} />
            </a>
            <a
              href="https://medium.com/@tharindu-n"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              <FaEnvelope  size={35} />
            </a>
          </div>
        </div>
      </div>
      <Timeline/>
    </section>
  );
};
