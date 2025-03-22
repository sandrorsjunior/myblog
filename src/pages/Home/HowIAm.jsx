import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope  } from "react-icons/fa";
import "./style.css"; // Ensure this file contains the CSS below

export const HowIAm = () => {
  return (
      <div className="row justify-content-center align-items-start text-center text-md-start">
        {/* Left Section: Introduction */}
        <div className="left-side col-md-8 col-12 ">
          <h1 className="mb-3 ">
          Where logic meets creation
          </h1>
          <p>
          Welcome to my blog! I'm Sandro, a Brazilian currently living in the vibrant city of Braga, Portugal. 
          My journey is a blend of technology, data, and a touch of discipline. I'm diving deep into robotics at the Polytechnic 
          Institute of Cávado and Ave, building on a foundation of Systems Analysis and Development. Expect to find posts about my 
          experiences, the tech I'm learning, and perhaps a few insights from my time in the Brazilian Navy and as a data analyst 
          at Ford. Let's explore the world of robotics and technology together!
          </p>
          
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
              <FaEnvelope  size={35} />
            </a>
          </div>
        </div>

        {/* Right Section: Profile Image & Social Media */}
        <div className="right-side col-md-4 col-12 d-flex flex-column align-items-center mt-4 mt-md-0">
          <img
            src="..\src\assets\logo.png"
            alt="image not found"
            className="rounded-5 img-fluid mb-3 rotated-img"
          />
        </div>
      </div>
  );
};
