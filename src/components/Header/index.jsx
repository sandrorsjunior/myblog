import React from "react";
import "./style.css";

export const Header = () => {
  const navItems = [
    { name: "Home", link: "#", active: true },
    { name: "About", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Articles", link: "#", disabled: true },
    { name: "Contact", link: "#", disabled: true },
  ];

  return (
    <>
      <div className="d-flex justify-content-center fixed-top mt-3">
        <nav className="navbar navbar-expand-lg bg-white rounded-5 d-inline-block w-auto p-2 Larger shadow">
          <div className="container-fluid d-inline-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className={` text-secondary-emphasis nav-link ${item.active ? "active" : ""} ${item.disabled ? "disabled" : ""}`}
                      href={item.disabled ? "#" : item.link}
                      role={item.disabled ? "button" : undefined}
                      aria-disabled={item.disabled}
                      tabIndex={item.disabled ? "-1" : "0"}
                      onClick={(e) => item.disabled && e.preventDefault()}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
