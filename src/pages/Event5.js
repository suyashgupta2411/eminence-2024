import React from "react";
import "./Event5.css"; // Make sure to create and style the Event5.css file
import eventImage from "../assets/Event5img.png"; // Replace with the correct path if needed

const Event5 = () => {
  return (
    <div className="event5-container">
      <div className="content-container">
        <div className="image-section">
          <img
            src={eventImage}
            alt="Event Illustration"
            className="event-image"
          />
        </div>
        <div className="text-section">
          <h2 className="event-title">The Apt Estimate</h2>
          <div className="scrollable-text">
            <p>
              You are strong, brave, and enough. You are the strongest person I
              ever came across. The world might not have been very nice to you,
              and it will continue to be like that. But you will always push
              through because you are much more than what you think!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event5;
