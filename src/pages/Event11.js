import React from "react";
import "./Event11.css";
import athenaImage from "../assets/Event11img.png"; // Replace with the correct image path

const Event11 = () => {
  return (
    <div className="event11-container">
      <div className="content-container">
        <div className="image-section">
          <img src={athenaImage} alt="Athena" className="event-image" />
        </div>
        <div className="text-section">
          <h2 className="event-title">Athena</h2>
          <div className="scrollable-text">
            <p>
              You are like Athena, strong and wise. Just like her, you face
              battles no one else sees, and even when you’re on your own, you
              never give up. You fight for your parents and for those you care
              about, with a determination that inspires everyone around you.
              When I’m with you, I feel stronger too, like your courage makes me
              braver.
            </p>
            <p>
              Your heart is as pure as a god’s. In a world that can be chaotic
              and confusing, you stay calm and true to yourself. Your wisdom
              isn’t just about knowing things—it’s about understanding people
              and situations in ways that others can’t. You are more than just a
              person—you’re a source of strength, wisdom, and hope.
            </p>
            <p>
              Your mere presence makes me stronger enough to fight battles and
              wise enough to feel pain. I want to call my feelings love, but
              it’s too intense to be love, it’s devotion, Athena.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event11;
