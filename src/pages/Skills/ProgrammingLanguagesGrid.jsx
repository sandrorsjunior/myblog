import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
);

const languages = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skill: 90,
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    skill: 85,
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    skill: 80,
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    skill: 70,
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    skill: 75,
  },
  {
    name: "Go",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    skill: 60,
  },
  {
    name: "Ruby",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    skill: 65,
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    skill: 55,
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    skill: 50,
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    skill: 85,
  },
];

// Skills for Horizontal Bar Charts
const skills = [
  { 
    name: "Data Engineering", 
    level: 85, 
    logo: "https://cdn-icons-png.flaticon.com/512/4359/4359871.png" 
  },
  { 
    name: "Data Analytics", 
    level: 80, 
    logo: "https://cdn-icons-png.flaticon.com/512/1063/1063811.png" 
  },
  { 
    name: "Agile Methods", 
    level: 75, 
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
  },
  { 
    name: "Electronics", 
    level: 70, 
    logo: "https://cdn-icons-png.flaticon.com/512/482/482947.png" 
  },
  { 
    name: "CNC", 
    level: 65, 
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" 
  },
  { 
    name: "Statistics", 
    level: 80, 
    logo: "https://cdn-icons-png.flaticon.com/512/1183/1183737.png" 
  },
  { 
    name: "Security", 
    level: 60, 
    logo: "https://cdn-icons-png.flaticon.com/512/483/483407.png" 
  },
  { 
    name: "Web Development", 
    level: 85, 
    logo: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png" 
  },
  { 
    name: "Mobile Development", 
    level: 70, 
    logo: "https://cdn-icons-png.flaticon.com/512/747/747314.png" 
  },
  { 
    name: "Data Visualization", 
    level: 90, 
    logo: "https://cdn-icons-png.flaticon.com/512/2164/2164735.png" 
  }
];


// Green color for bars
const greenColor = "rgba(34, 197, 94, 0.8)"; // Tailwind's emerald-500 color vibe
const greenBorderColor = "rgba(34, 197, 94, 1)";

export const ProgrammingLanguagesGrid = () => {
  return (
    <div className="text-center mt-4 container">
      {/* Programming Languages Section */}
      <h2 className="mb-4">Programming Languages</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {languages.map((language, index) => (
          <div className="col" key={index}>
            <div
              className="card p-3 shadow-sm language-card"
              style={{ borderTop: `4px solid ${greenColor}` }}
            >
              <img
                src={language.logo}
                alt={language.name}
                className="card-img-top language-logo"
                style={{ height: "80px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{language.name}</h5>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${language.skill}%` }}
                    aria-valuenow={language.skill}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {language.skill}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Programming Languages Section */}
      <h2 className="mt-5 mb-4">Programming Languages</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {skills.map((skill, index) => (
          <div className="col" key={index}>
            <div
              className="card p-3 shadow-sm language-card"
              style={{ borderTop: `4px solid ${greenColor}` }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="card-img-top language-logo"
                style={{ height: "80px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{skill.name}</h5>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
