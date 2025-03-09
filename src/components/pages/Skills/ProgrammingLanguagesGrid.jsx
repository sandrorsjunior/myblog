import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Title);

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

export const ProgrammingLanguagesGrid = () => {
  return (
    <div className="text-center mt-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mb-5">
        {languages.map((language, index) => (
          <div className="col" key={index}>
            <div className="card p-3  border border-0">
              <Doughnut
                data={{
                  labels: [language.name, "Other"],
                  datasets: [
                    {
                      data: [language.skill, 100 - language.skill],
                      backgroundColor: ["#4CAF50", "#ffffff"],
                      hoverBackgroundColor: ["#45A049", "#ccc"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    title: {
                      display: true,
                      text: language.name,
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {languages.map((language, index) => (
          <div className="col" key={index}>
            <div className="card p-3 shadow-sm  language-card ">
              <img
                src={language.logo}
                alt={language.name}
                className="card-img-top language-logo"
              />
              <div className="card-body">
                <h5 className="card-title">{language.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
