import React from "react";
import { useNavigate } from "react-router-dom"; // game 페이지로 render 하기 위한 useNavigate 사용
import "./LoadingPage.css";

function LoadingPage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="container">
      <h1 className="title">Up-Down Game!</h1>
      <p className="rules">Rules of Game</p>
      <p>1. Choose a number between 1 and 100</p>
      <p>2. Guess the number</p>
      <p>3. If your guess is higher than the number, say "Up"</p>
      <p>4. If your guess is lower than the number, say "Down"</p>
      <p>5. If your guess is correct, say "Correct!"</p>
      <p>6. Repeat the process</p>
      <p>7. If you guess the number in 7 tries, you win!</p>
      <p>8. If you don't guess the number in 7 tries, you lose!</p>

      <button className="start" onClick={startGame}>
        Start
      </button>
    </div>
  );
}

export default LoadingPage;
