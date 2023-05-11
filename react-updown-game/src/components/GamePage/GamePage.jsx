import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // reset시 LoadingPage로 render 하기 위한 useNavigate 사용, LoadingPage에서 설정한 난이도를 state로 받아오기 위해 useLocation 사용
import "./GamePage.css";
import UserChance from "../UserChance/UserChance";

function GamePage({
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
  const location = useLocation();
  const difficulty = location.state.difficulty;

  // 난이도에 따른 목숨 설정
  useEffect(() => {
    let chancesByDifficulty;
    switch (difficulty) {
      case "easy":
        chancesByDifficulty = 12;
        break;
      case "normal":
        chancesByDifficulty = 7;
        break;
      case "hard":
        chancesByDifficulty = 5;
        break;
      default:
        chancesByDifficulty = 7;
        break;
    }
    setChances(chancesByDifficulty);
  }, [difficulty, setChances]);

  // userNumber가 정상적인 범위에 있도록 관리하는 함수 (숫자가 아니면 입력받지 않고, 1-100사이의 숫자만 받도록 함)
  // userNumber를 문자열로 저장하기 때문에 추후 정답과 비교 로직에서 문자열로 변환 필요
  const handleInputChange = (e) => {
    const input = e.target.value;
    // parseInt 메서드로 text를 정수형으로 변환, 값이 NaN일 경우 빈 문자열로 처리
    const number = parseInt(input.replace(/[^0-9]/g, "")) || ""; // 정규식을 사용하여 숫자를 제외한 문자열을 빈 문자열 처리

    if (number > 100) {
      setUserNumber("100");
    } else if (number < 1) {
      setUserNumber("");
    } else {
      setUserNumber(number.toString());
    }
  };

  // enter키 입력 시 submit 되도록 설정하는 함수
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // submit 버튼 클릭시 게임 로직 구현
  const handleSubmit = (e) => {
    // 페이지 새로고침을 방지
    e.preventDefault();

    // 위 코드에서 저장된 userNumber 값이 string 타입이기 때문에, 정수형으로 변환해줌
    const userNumberInt = parseInt(userNumber);

    // 사용자 입력 기록 배열에 입력 값 push
    setRecord((cur) => {
      const newRecord = [...cur];
      newRecord.push(userNumber);
      return newRecord;
    });

    // 목숨 - 1
    setChances((cur) => cur - 1);

    // 정답이면 win 페이지로 렌더링
    if (userNumberInt === computerNumber) {
      navigate("/win", { state: { difficulty } });
    } else {
      // 사용자 입력 값과 정답이 다를시 (정답이 크면 업, 작으면 다운)
      if (userNumberInt > computerNumber) {
        setMessage("Umm.. Down");
      } else if (userNumberInt < computerNumber) {
        setMessage("Up ! !");
      }

      // 목숨 0이면 lose 페이지로 렌더링
      if (chances === 1) {
        navigate("/lose");
      }
    }
    // input 값 초기화
    setUserNumber("");
  };

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

      <div className="userChance">
        <p>
          Your Chance:
          {/* 길이가 12인 빈 배열을 만들어 각 요소에 하트를 넣음 */}
          {/* 난이도에 따라 최대 12개에서 5개의 하트를 생성 */}
          {Array.from({ length: 12 }).map((_, index) => (
            <UserChance key={index} chance={index < chances} />
          ))}
        </p>
      </div>
      {/* 난이도가 hard일 경우 youe record 표시 안함 */}
      {difficulty !== "hard" && (
        <div className="userRecord">
          <p>
            Your Record:
            {record.map((value, index) => {
              return <span key={index}>{value + " "}</span>;
            })}
          </p>
        </div>
      )}
      <div>
        <p className="message">{message}</p>
      </div>
      <input
        className="input"
        placeholder="Please enter a number from 1 to 100"
        value={userNumber}
        onChange={handleInputChange}
        maxLength="3"
        type="text"
        onKeyPress={handleKeyPress} // 왜 밑줄 그어지지 ?
      />
      <div className="buttonContainer">
        <button
          className="submit"
          type="submit"
          disabled={!userNumber}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default GamePage;
