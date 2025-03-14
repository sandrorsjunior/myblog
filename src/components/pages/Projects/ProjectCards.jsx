import React from "react";
import { FaLink } from "react-icons/fa"; // Link icon from react-icons
import {data} from "./data";
import { Link, Router, Routes } from "react-router-dom";

// ProjectCard Component to display a single project
const ProjectCard = ({ logoSrc, title, description, link }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card mb-4 border border-0 rounded-5 card-projects p-2 shadow-sm">
        <div className="row justify-content-start">
        <img
          src={logoSrc}
          alt={`${title} logo`}
          className="card-img-top"
          style={{ maxWidth: "70px", margin: "10px" }}
        />
        </div>
        <div className="row card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
              to={"/Article"}
            >
              <FaLink /> View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// MainProjects Component to display multiple projects
export const ProjectCards = () => {

  return (
    <div className="">
      <div className="row">
        {data.map((project, index) => (
        <ProjectCard
        key={index}
        logoSrc={project.logoSrc}
        title={project.title}
        description={project.description}
        link={project.link}
      />
        ))}
      </div>
    </div>
  );
};
