import React from "react";
import { useNavigate } from "react-router-dom";
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
}) {
  const navigate = useNavigate();

  // reset 버튼 누르면 정답, 사용자 값, 목숨 모두 초기화하고 루트 페이지로 렌더링
  const handleReset = () => {
    setComputerNumber(Math.floor(Math.random() * 100) + 1);
    setUserNumber("");
    setChances(7);
    setRecord([]);
    setMessage("");
    navigate("/");
  };

  const result = () => {
    if (chances === 6) {
      return "👑perfect!!👑";
    } else if (chances === 5) {
      return "🥳Great!🥳";
    } else if (chances < 5 && chances >= 3) {
      return "😆Good!😆";
    } else {
      return "🤔Umm.. Let's try again!🤔";
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
