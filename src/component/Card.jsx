import React from "react";
import "./Card.css";
export default function Card({ name,description,role,contact, img_url, img_alt }) {
  return (
    <div className="card">
      <img src={img_url} alt={img_alt} />
      <div>
        <h1>
          {name}

        </h1>
      <p>{description}</p>
      <p>{}</p>
      </div>
    </div>
  );
}
