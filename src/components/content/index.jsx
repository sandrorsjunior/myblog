import React from "react";

export const Content = ({children}) => {
  return (
    <section className="d-flex flex-column p-5 ">
      <div style={{ marginTop: "100px"}}>
        {children}
      </div>
    </section>
  );
};
