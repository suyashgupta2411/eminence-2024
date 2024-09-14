import React from "react";
import "./GalleryPage.css";

const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("../assets/gallery", false, /\.(jpe?g|JPG)$/)
);

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="polaroid">
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
