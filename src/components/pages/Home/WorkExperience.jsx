import React from "react";
import { FaBriefcase} from "react-icons/fa";

const workExperience = [
  {
    company: "Google",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    company: "Netflix",
    role: "Software Engineer",
    duration: "2019 - Present",
    logo: "https://logo.clearbit.com/netflix.com",
  }
];

export const WorkExperience = () => {
  return (
    <div className="card shadow-sm col-md-4 col-12 border border-0 rounded-3 overflow" style={{ height:"400px"}}>
      <div className="card-title d-flex mt-2">
        <FaBriefcase size={20} className="me-2"/>
        <h4 className="fs-6">Work Experience</h4>
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
