import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // game 페이지로 render 하기 위한 useNavigate 사용
import "./LoadingPage.css";

function LoadingPage() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("normal");

  const startGame = () => {
    navigate("game", { state: { difficulty } });
  };

  const selectDifficulty = (level) => {
    setDifficulty(level);
  };

  return (
    <>
      {/* 게임 룰 페이지 */}
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
        <br></br>
        <p className="rulesComment">
          The rules are based on normal difficulty level.
        </p>
        <p className="rulesComment">
          Choose from a variety of difficulty levels and enjoy!
        </p>

        <button className="start" onClick={startGame}>
          Start
        </button>
        {/* 난이도 선택 버튼 */}
        <div className="difficulty-wrapper">
          <span className="choose-difficulty">Choose a difficulty: </span>
          <button
            className={`easy ${difficulty === "easy" ? "selected" : ""}`}
            onClick={() => selectDifficulty("easy")}
          >
            Easy
          </button>
          <button
            className={`normal ${difficulty === "normal" ? "selected" : ""}`}
            onClick={() => selectDifficulty("normal")}
          >
            Normal
          </button>
          <button
            className={`hard ${difficulty === "hard" ? "selected" : ""}`}
            onClick={() => selectDifficulty("hard")}
          >
            Hard
          </button>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
