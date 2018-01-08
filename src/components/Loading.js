import React from "react";
import logo from "../bandsintownlogo.svg";
import "../App.css";

const Loader = () => {
  return (
    <div
      style={{ margin: "0 auto", textAlign: "center", position: "relative" }}
    >
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Loader;
