import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Article = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://localhost:8080/postArticle?id=${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let result = await response.json();
      console.log(id);
      setData(result);
    };
    getData();
  }, []);

  return (
    <div className="my-5">
      {data ? (
        <article
          className=""
          dangerouslySetInnerHTML={{ __html: data[0].htmlContent }}
        ></article>
      ) : (
        <article className=""></article>
      )}
    </div>
  );
};
