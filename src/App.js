import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import { Routes } from "./routes";

const App = () => {
  return (
    <MainTemplate>
      <Router>
        <Routes />
      </Router>
    </MainTemplate>
  );
};

export default App;
