import React from "react";
import "../component/Navbar.css";
export default function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="/logo.jpg" alt="logo" />
        <h1>
          Proximity<span>Pro</span>
        </h1>{" "}
      </div>
      <ul className="app__navbar-links">
        {["home", "contact", "services", "about"].map((data) => (
          <li key={`item-${data}`}>{data}</li>
        ))}
      </ul>
    </nav>
  );
}
