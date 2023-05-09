import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // game 페이지로 render 하기 위한 useNavigate 사용
import "./LoadingPage.css";

function LoadingPage() {
  const [userNumber, setUserNumber] = useState(""); // 사용자의 입력 값을 저장하고 변경하기 위한 state
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const input = e.target.value;
    const number = parseInt(input.replace(/[^0-9]/g, "")) || ""; // 정규식을 사용하여 숫자를 제외한 문자열을 빈 문자열 처리
    // parseInt 메서드로 text를 정수형으로 변환, 값이 NaN일 경우 빈 문자열로 처리
    if (number > 100) {
      setUserNumber("100");
    } else if (number < 1) {
      setUserNumber("");
    } else {
      setUserNumber(number.toString());
    }
  };

  const startGame = () => {
    navigate(`/game?number=${userNumber}`);
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
      <button className="start" onClick={startGame} disabled={!userNumber}>
        Start
      </button>
    </div>
  );
}

export default LoadingPage;
