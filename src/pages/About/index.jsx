import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from "react-icons/fa";
import "./style.css"; // Ensure this file contains the CSS below
import { Timeline } from "../../components/TimeLine/TimeLine";

export const About = () => {
  return (
    <section className="">
      <div className="row justify-content-center align-items-start text-center text-md-start">
        {/* Left Section: Introduction */}
        <div className="left-side col-md-8 col-12 ">
          <h1 className="mb-3 ">
            Blending analytical thinking, hands-on engineering, and a passion
            for technology is the journey I'm sharing
          </h1>
          <p>
          With a background in Systems Analysis and Development and a stint as a data analyst at Ford Brazil, I've always been drawn to the power of data and technology. But my story also includes a chapter in the Brazilian Navy, where I learned the importance of discipline
          </p>
          <p>
          Now, I'm diving headfirst into robotics at the Polytechnic Institute of Cávado and Ave, fueled by a passion for digital electronics and CNC.
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
          <div className="social-links d-flex justify-content-start">
            <a
              href="https://www.linkedin.com/in/sandrojr/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 linkedin"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://github.com/sandrorsjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 github"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="medium me-3"
            >
              <FaMedium size={35} />
            </a>
            <a
              href="sandrorsjunior@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              <FaEnvelope size={35} />
            </a>
          </div>
        </div>
      </div>
      <Timeline />
    </section>
  );
};
