import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // game 페이지로 render 하기 위한 useNavigate 사용
import "./GamePage.css";

function GamePage() {
  const [userNumber, setUserNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserNumber(input.replace(/[^0-9]/g, "")); // input type이 string이기 때문에 정규식으로 숫자로 바꿈
  };

  const startGame = () => {
    if (userNumber === null) {
      alert("Please enter a number");
    } else {
      navigate(`/game?number=${userNumber}`);
    }
  };

  return (
    <div className="container">
      <h1>Up-Down Game!</h1>
      <h3>Rules of Game</h3>
      <p>1. Choose a number between 1 and 100</p>
      <p>2. Guess the number</p>
      <p>3. If your guess is higher than the number, say "Up"</p>
      <p>4. If your guess is lower than the number, say "Down"</p>
      <p>5. If your guess is correct, say "Correct!"</p>
      <p>6. Repeat the process</p>
      <p>7. If you guess the number in 7 tries, you win!</p>
      <p>8. If you don't guess the number in 7 tries, you lose!</p>

      <input
        className="input"
        placeholder="Please enter a number from 1 to 100"
        value={userNumber}
        onChange={handleInputChange}
        maxLength="3"
        type="text"
      />
      <button className="start" onClick={startGame}>
        Start
      </button>
    </div>
  );
}

export default GamePage;
