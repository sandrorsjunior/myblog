import React from "react";

const articles = [
  {
    date: "7 May 2023",
    title: "The Benefits of Cloud Computing",
    description:
      "Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
    link: "/article/1",
  },
  {
    date: "7 May 2023",
    title: "Artificial Intelligence in Healthcare",
    description:
      "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
    link: "/article/2",
  },
  {
    date: "7 May 2023",
    title: "Artificial Intelligence in Healthcare",
    description:
      "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
    link: "/article/2",
  }
];

export const Articles = () => {
  return (
    <div className="mb-4 col-md-8 col-12 overflow overflow-bar-none " style={{ height:"400px", paddingRight:"3rem"}}>
      {articles.map((article, index) => (
        <div key={index} className="card mb-3 border border-0 rounded-3">
          <div className="card-body p-5">
            <h6 className="text-muted">{article.date}</h6>
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text text-justify">{article.description}</p>
            <a href={article.link} className="btn btn-outline-secondary">
              Read Article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};


