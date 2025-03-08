import React from "react";

export const Content = ({children}) => {
  return (
    <section className="d-flex flex-column bg-white p-5 " style={{ height: '100vh'}}>
      <div style={{ marginTop: "100px"}}>
        {children}
      </div>
    </section>
  );
};
