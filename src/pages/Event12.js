import React from "react";
import "./Event12.css";
import aphroditeImage from "../assets/AphroditeImage.png"; // Replace with your image path

const Event12 = () => {
  return (
    <div className="event12-container">
      <div className="content-container">
        <div className="image-section">
          <img
            src={aphroditeImage}
            alt="Aphrodite Illustration"
            className="event-image"
          />
        </div>
        <div className="text-section">
          <h2 className="event-title">Aphrodite</h2>
          <div className="scrollable-text">
            <p>
              You are my Aphrodite, the goddess of beauty. Your presence has a
              power over me that leaves me still, completely captivated by your
              beauty. It isn’t just your outward appearance that leaves me
              speechless, but the way your inner light shines through every
              word, every gesture. Your beauty holds such power that I often
              find myself too lost to even form the words to praise you. I stand
              in awe, not because I don’t know what to say, but because no words
              seem enough.
            </p>
            <p>
              You have a kindness, a purity that flows from your heart, and it
              makes your beauty unmatched. When you cry, it feels like my heart
              is breaking, because someone as incredible as you deserves nothing
              but joy. You should never have to feel pain, because you are the
              very definition of light and love.
            </p>
            <p>
              People tell me I make them laugh, but when I’m with you, I find
              myself lost. Lost in your smile, lost in the sound of your voice,
              lost in my devotion to you. I don’t need to entertain or impress
              when I’m with you, because nothing else matters. Just being near
              you brings me a peace I’ve never known before.
            </p>
            <p>
              There’s nothing in this world that I want more than you. Every
              dream I have, every hope for the future, you are at the center of
              it all. You make me happier than I ever thought possible, and
              there’s no one who brings such joy to my life as you do.
            </p>
            <p className="final-line">You are my Aphrodite.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event12;
