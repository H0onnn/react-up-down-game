import React from "react";
import { useNavigate } from "react-router-dom";
import "./LosePage.css";

function LosePage({
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

  return (
    <div className="container">
      <h1 className="title">Up-Down Game!</h1>
      <h2>Result is: {computerNumber}</h2>
      <h2>You Lose!</h2>
      <h4>Sorry, try again!</h4>
      <button className="restart" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}

export default LosePage;
