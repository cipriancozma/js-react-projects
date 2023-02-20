import React from "react";
import "./styles.css";

function Photo({ photo }) {
  return (
    <div className="photo-container">
      <a href={photo.links.html} target="_blank" rel="noreferrer">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </a>
    </div>
  );
}

export default Photo;
