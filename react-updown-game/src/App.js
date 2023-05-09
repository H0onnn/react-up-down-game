import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import GamePage from "./components/GamePage/GamePage";
import LosePage from "./components/LosePage/LosePage";
import WinPage from "./components/WinPage/WinPage";

function App() {
  const [userNumber, setUserNumber] = useState(""); // 사용자 값 저장할 state

  const [computerNumber, setComputerNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  ); // 1부터 100까지 랜덤 숫자 뽑아서 정답 state에 저장

  const [record, setRecord] = useState([]); // 사용자가 입력했던 숫자를 담을 빈 배열 생성

  const [chances, setChances] = useState(7); // 사용자에게 부여되는 기회 7개로 설정

  const [message, setMessage] = useState(""); // 사용자가 입력한 값에 따른 메세지를 출력할 state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route
          path="/game"
          element={
            <GamePage
              computerNumber={computerNumber}
              setComputerNumber={setComputerNumber}
              record={record}
              setRecord={setRecord}
              chances={chances}
              setChances={setChances}
              userNumber={userNumber}
              setUserNumber={setUserNumber}
              message={message}
              setMessage={setMessage}
            />
          }
        />
        <Route
          path="/lose"
          element={
            <LosePage
              computerNumber={computerNumber}
              setComputerNumber={setComputerNumber}
              record={record}
              setRecord={setRecord}
              chances={chances}
              setChances={setChances}
              userNumber={userNumber}
              setUserNumber={setUserNumber}
              message={message}
              setMessage={setMessage}
            />
          }
        />
        <Route
          path="/win"
          element={
            <WinPage
              computerNumber={computerNumber}
              setComputerNumber={setComputerNumber}
              record={record}
              setRecord={setRecord}
              chances={chances}
              setChances={setChances}
              userNumber={userNumber}
              setUserNumber={setUserNumber}
              message={message}
              setMessage={setMessage}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
