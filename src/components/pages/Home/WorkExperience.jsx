import React from "react";

const workExperience = [
  {
    company: "Facebook",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "./facebook.png",
  },
  {
    company: "Twitter",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "./twitter.png",
  },
  {
    company: "Facebook",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "./facebook.png",
  },
  {
    company: "Twitter",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "./twitter.png",
  },
  {
    company: "Facebook",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "./facebook.png",
  },
  {
    company: "Twitter",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "./twitter.png",
  },
];

export const WorkExperience = () => {
  return (
    <div className="card shadow-sm col-md-4 col-12 border border-0 rounded-3" style={{ height: "400px", overflowY: "auto" }}>
      <div className="card-header">
        <h4>Work Experience</h4>
      </div>
      <div className="card-body">
        {workExperience.map((work, index) => (
          <div key={index} className="d-flex align-items-center mb-3">
            <img
              src={work.logo}
              alt={work.company}
              className="me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <h5 className="mb-0">{work.company}</h5>
              <small>{work.role}</small>
              <div className="text-muted">{work.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
