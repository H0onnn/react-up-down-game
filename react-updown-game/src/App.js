import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import GamePage from "./components/GamePage/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
