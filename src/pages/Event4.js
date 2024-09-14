import React from "react";
import "./Event4.css"; // Import the CSS file for styling
import letterImage from "../assets/letter.png"; // Path to the letter image

const Event4 = () => {
  return (
    <div className="event4-container">
      <div className="content-container">
        <div className="image-section">
          <img src={letterImage} alt="Letter" className="letter-image" />
        </div>
        <div className="text-section">
          <h2 className="event-title">Letters from a Soldier</h2>
          <div className="scrollable-text">
            <p>
              Dear Love,
              <br />
              I am doing well here, though memories of you bring me solace
              amidst the chaos. The days are long, but it is thoughts of you
              that keep me going. Thanks to your training, I face everything
              with courage.
              <br />
              At times, it feels like you're right here with me, holding my hand
              as I take each step forward. I keep your letters close, reading
              them when the world around seems too much to bear. Peace is
              nowhere in sight, but your words calm my restless mind.
              <br />
              Each day, I fight not just for myself but for you too. The thought
              of you keeps me grounded, reminding me of everything that's worth
              fighting for.
              <br />
              Until we meet again, know that you are in every beat of my heart.
              I miss you dearly.
              <br />
              Yours forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event4;
