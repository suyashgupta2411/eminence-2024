import React from "react";
import "./Event8.css";

const Event8 = () => {
  return (
    <div className="event8-container">
      <div className="text-section">
        <h2 className="event-title">Reverie</h2>
        <p className="playlist-description">
          Let the music flow and take you into a state of reverie. Enjoy this
          serene playlist that will soothe your mind and soul.
        </p>
      </div>
      <div className="player-section">
        <iframe
          className="playlist-player"
          src="https://open.spotify.com/embed/playlist/0DnnBakSMYlMoELTWpqmXb?utm_source=generator&theme=0"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Reverie Playlist"
        ></iframe>
      </div>
    </div>
  );
};

export default Event8;
