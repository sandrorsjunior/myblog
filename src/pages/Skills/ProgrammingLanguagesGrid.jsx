import React, { useEffect, useState } from "react";
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

// Green color for bars
const greenColor = "rgba(34, 197, 94, 0.8)"; // Tailwind's emerald-500 color vibe
const greenBorderColor = "rgba(34, 197, 94, 1)";

export const ProgrammingLanguagesGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://localhost:8080/skill");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let result = await response.json();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div className="text-center mt-4 container">
      {/* Programming Languages Section */}
      <h2 className="mb-4">Programming Languages</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {data.map((language, index) => {
          if (language.flag == "LANGUAGE") {
            return (
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
                        style={{ width: `${language.level}%` }}
                        aria-valuenow={language.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {language.level}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Programming Languages Section */}
      <h2 className="mt-5 mb-4">Programming Languages</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {data.map((skill, index) => {
          if (skill.flag == "SKILL") {
            return (
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
            );
          }
        })}
      </div>
    </div>
  );
};
