import React from "react";
import AnimatedText from "../components/AnimatedText";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedText />
    </div>
  );
};

export default HomePage;
