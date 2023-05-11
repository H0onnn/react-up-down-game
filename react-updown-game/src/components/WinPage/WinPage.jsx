import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { FaCrown, FaLaugh, FaSmile, FaMeh } from "react-icons/fa"; // 아이콘을 출력하기 위한 import
import "./WinPage.css";

function WinPage({
  computerNumber,
  setComputerNumber,
  record,
  setRecord,
  chances,
  setChances,
  userNumber,
  setUserNumber,
  message,
  setMessage,
  // difficulty,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const difficulty = location.state.difficulty;

  // reset 버튼 누르면 정답, 사용자 값, 목숨 모두 초기화하고 루트 페이지로 렌더링
  const handleReset = () => {
    setComputerNumber(Math.floor(Math.random() * 100) + 1);
    setUserNumber("");
    setChances(7);
    setRecord([]);
    setMessage("");
    navigate("/");
  };

  // 난이도에 따른 결과값 출력
  const result = () => {
    if (difficulty === "easy") {
      if (chances === 11) {
        return "👑perfect!!👑 Challenge the higher difficulty level!";
      } else if (chances === 9) {
        return "🥳Great!🥳 Challenge the higher difficulty level!";
      } else if (chances < 9 && chances >= 5) {
        return "😆Good!😆 Challenge the higher difficulty level!";
      } else {
        return "🤔Umm.. Let's try again!🤔";
      }
    } else if (difficulty === "normal") {
      if (chances === 6) {
        return "👑perfect!!👑 Challenge the hard difficulty level!";
      } else if (chances === 5) {
        return "🥳Great!🥳 Challenge the hard difficulty level!";
      } else if (chances < 5 && chances >= 3) {
        return "😆Good!😆 Challenge the hard difficulty level!";
      } else {
        return "🤔Umm.. Let's try again!🤔";
      }
    } else if (difficulty === "hard") {
      if (chances === 4) {
        return "👑perfect!!👑 You are the king of the up-down game!";
      } else if (chances === 3) {
        return "🥳Great!🥳 You are the king of the up-down game!";
      } else if (chances < 3 && chances >= 2) {
        return "😆Good!😆 You are the king of the up-down game!";
      } else {
        return "🤔Umm.. Let's try again!🤔";
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">Up-Down Game!</h1>
      <h2>Result is: {computerNumber}</h2>
      <h2>Congrtulations!</h2>
      <h2>You Win!</h2>
      <div>
        <p className="try">Your Try: {record.length}</p>
        <p className="resultMessage">{result()}</p>
      </div>
      <div></div>
      <button className="restart" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}

export default WinPage;
