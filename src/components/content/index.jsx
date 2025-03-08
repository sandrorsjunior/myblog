import React from "react";

export const Content = ({children}) => {
  return (
    <section className="d-flex flex-column " style={{ height: '100vh',  paddingTop: "150px" }}>
        {children}
    </section>
  );
};
