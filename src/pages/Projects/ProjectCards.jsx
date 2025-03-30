import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa"; // Link icon from react-icons
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://localhost:8080/project");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let result = await response.json();
      setData(result);
    };
    getData();
  }, []);

  return (
    <div className="">
      <div className="row">
        {data.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              logoSrc={project.logoSrc}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};
