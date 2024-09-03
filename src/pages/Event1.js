import React from "react";
import "./Event1.css"; // Import the CSS file for styling
import eventImage from "../assets/Event1img.png"; // Replace with the correct path if needed

const Event1 = () => {
  return (
    <div className="event1-container">
      <div className="content-container">
        <div className="image-section">
          <img
            src={eventImage}
            alt="Event Illustration"
            className="event-image"
          />
        </div>
        <div className="text-section">
          <h2 className="event-title">Reminders of Affection</h2>
          <div className="scrollable-text">
            <p>
              You are beautiful and you are loved. You are the most beautiful
              person inside out. The sheer innocence you hold at the age of 23
              is something we don't see often. You are one of a kind. You
              inspire me, you bring joy to everyone around you. Your smile
              relieves stress, your dimples relieve anxiety, your speech
              hypnotizes me. The way you talk, stretching the last word, the way
              you explain things, the way you be around your friends is the
              cutest thing ever. Every morning, every day I am grateful that you
              exist, your pretty little face exists, imagining which put me into
              sleep last night. Divya Singhal you make people who had run out of
              luck a long time back, feel the luckiest, just because they have
              your presence. I know your mom, your dad, your sister, your close
              friends, we all feel blessed every day just because we have you in
              our life. Thank you for existing Divya. Thank you for being you.
              And thank you for bringing joy and colors into the life of people
              who love you.
            </p>
            <p>
              And just a gentle reminder: You were and you will be the most
              beautiful person to exist. Even if I can't see you my eyes will
              never behold a sight more beautiful than you. Even if the most
              relaxing of mountains exist, they will never soothe me as much as
              your eyes, even if the deepest of oceans exist they will never
              sink me as deep as your thoughts do, even if the bravest of
              warriors exist, they will never inspire me as much as you do. No
              one can't thank you enough for everything you have done for them.
              Still here's a thank you for making us feel like the luckiest
              humans on Earth Divya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;
