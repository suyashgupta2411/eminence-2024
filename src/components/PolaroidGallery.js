import React from "react";

const sampleImages = [
  { url: "https://via.placeholder.com/150", caption: "Sample Image 1" },
  { url: "https://via.placeholder.com/150", caption: "Sample Image 2" },
  { url: "https://via.placeholder.com/150", caption: "Sample Image 3" },
  // Add more images as needed
];

const PolaroidGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {sampleImages.map((image, index) => (
        <div
          key={index}
          style={{
            width: "150px",
            padding: "10px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src={image.url}
            alt={`Polaroid ${index}`}
            style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          />
          <p style={{ margin: "10px 0 0", fontSize: "0.9rem", color: "#333" }}>
            {image.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;
