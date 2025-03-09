import React from "react";
import { FaLink } from "react-icons/fa"; // Link icon from react-icons

// ProjectCard Component to display a single project
const ProjectCard = ({ logoSrc, title, description, link }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-5 ">
      <div className="card mb-4 border border-0 rounded-5 card-projects p-2">
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
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              <FaLink /> View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// MainProjects Component to display multiple projects
export const MainProjects = () => {
  // Sample data for projects
  const projects = [
    {
      logoSrc:
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      title: "Interactive Web App",
      description:
        "Built a dynamic web application using React and Node.js with real-time data updates.",
      link: "https://example.com/web-app",
    },
    {
      logoSrc:
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
      title: "Enterprise Dashboard",
      description:
        "Built a business intelligence dashboard with TypeScript and Angular.",
      link: "https://example.com/dashboard",
    },
    {
      logoSrc:
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
      title: "Microservices Architecture",
      description:
        "Designed a scalable microservices system using Go and Kubernetes.",
      link: "https://example.com/microservices",
    },
    // Add more projects here...
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {projects.map((project, index) => (
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
