import React from "react";
import { FaLink } from "react-icons/fa"; // Link icon from react-icons
import "./style-MainProjects.css"; // Ensure your styles are in this CSS file

// ProjectCard Component to display a single project
const ProjectCard = ({ logoSrc, title, description, link }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
      <div className="card shadow-sm mb-4 border border-0 rounded-3">
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
              className="btn btn-outline-primary"
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
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
      link: "https://example.com/project-2",
    },
    {
      logoSrc:
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
      link: "https://example.com/project-3",
    },
    {
      logoSrc:
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
      link: "https://example.com/project-2",
    },
    {
      logoSrc:
        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
      link: "https://example.com/project-3",
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
