import React, { useEffect, Component } from "react";

function Header(props) {
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1
          style={{
            fontWeight: "500",
            paddingBottom: "4px",
            color: "#fff",
          }}
        >
          I Love You
        </h1>
      </div>
      <div className="headerWave"></div>
    </header>
  );
}

export { Header };
