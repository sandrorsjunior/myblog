import React from "react";
import "./style.css";

export const About = () => {
  return (
    <div className="row justify-content-around">
      <div className="left-side col-8">
        <h1>I’m Tharindu N. I live in Sri Lanka, where I design the future.</h1>
        <div>I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.</div>
      </div>
      <div className="right-side col">
      <div className="image-container ">
      <img src="https://reactfolio.tharindu.dev/about.jpg" class="rounded-5 d-block float-start me-3" style={{ width: '300px'}}/>
      </div>
      </div>
    </div>
  );
};
