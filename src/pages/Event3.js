import React from "react";
import "./Event3.css"; // Import the CSS file for styling
import wroseImage from "../assets/wrose.png"; // Path to the white rose image
import proseImage from "../assets/prose.png"; // Path to the pink rose image

const Event3 = () => {
  return (
    <div className="event3-container">
      <div className="content-container">
        <div className="image-section">
          <img src={wroseImage} alt="White Rose" className="blooming-image" />
          <img src={proseImage} alt="Pink Rose" className="blooming-image" />
        </div>
        <div className="text-section">
          <h2 className="event-title">A Bloom Gesture</h2>
          <div className="scrollable-text">
            <p>
              White flowers to embody the immense innocence you hold, pink roses
              to add to your grace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event3;
