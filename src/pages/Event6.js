import React from "react";
import "./Event6.css"; // Ensure the correct CSS file is linked
import eventImage from "../assets/Event6img.png"; // Replace with the correct path to the image of Ganesh Ji

const Event6 = () => {
  return (
    <div className="event6-container">
      <div className="content-container">
        <div className="image-section">
          <img src={eventImage} alt="Lord Ganesh" className="event-image" />
        </div>
        <div className="text-section">
          <h2 className="event-title">Serenity of Lord Ganesh</h2>
          <p className="serene-line">
            In the presence of Ganesh Ji, serenity flows, calming the mind and
            soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event6;
