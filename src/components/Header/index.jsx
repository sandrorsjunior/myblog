import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  const navItems = [
    { name: "Home", link: "/"},
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Skill", link: "/skills" },
  ];

  return (
    <>
      <div className="d-flex justify-content-center fixed-top mt-3">
        <nav className="navbar navbar-expand-lg bg-light-subtle rounded-5 d-inline-block w-auto p-2 shadow-sm">
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
                    <Link to={item.disabled ? "#" : item.link}
                      className={`fw-medium fs-5 pe-3 ps-3 text-secondary-emphasis nav-link ${item.active ? "active" : ""} ${item.disabled ? "disabled" : ""}`}
                      role={item.disabled ? "button" : undefined}
                      aria-disabled={item.disabled}
                      tabIndex={item.disabled ? "-1" : "0"}
                      onClick={(e) => item.disabled && e.preventDefault()}
                    >
                      {item.name}
                    </Link>
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
