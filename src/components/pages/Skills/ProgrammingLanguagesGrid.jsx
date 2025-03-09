import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

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

// Generate random colors once
const colors = languages.map(() =>
  "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
);

export const ProgrammingLanguagesGrid = () => {
  return (
    <div className="text-center mt-4">
      <div className="row">
        <div className="col">
          <div className="card p-3 border border-0" style={{ height: "500px" }}>
            <Bar
              data={{
                labels: languages.map((lang) => lang.name),
                datasets: [
                  {
                    label: "Skill Level (%)",
                    data: languages.map((lang) => lang.skill),
                    backgroundColor: colors,
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: "y", // Makes it horizontal
                plugins: {
                  title: {
                    display: true,
                    text: "Programming Language Skills",
                    font: {
                      size: 20,
                    },
                  },
                  legend: {
                    display: false, // Optional: hides legend since label is in the title
                  },
                },
                scales: {
                  x: {
                    display: false,
                    beginAtZero: true,
                    max: 100,
                    title: {
                      display: false,
                      text: "Skill Level (%)",
                    },
                  },
                  y: {
                    title: {
                      display: false,
                      text: "Languages",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4">
        {languages.map((language, index) => (
          <div className="col" key={index}>
            <div
              className="card p-3 shadow-sm language-card"
              style={{ borderTop: `4px solid ${colors[index]}` }}
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
                    className="progress-bar"
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
    </div>
  );
};
