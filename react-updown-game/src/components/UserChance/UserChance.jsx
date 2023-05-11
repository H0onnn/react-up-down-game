import React from "react";

// 사용자의 기회를 하트로 나타내는 컴포넌트, true이면 하트가 보여지고 false가 될시에 visibility: hidden 속성으로 하나씩 사라지게함
function UserChance({ chance }) {
  return chance ? (
    <span>❤️</span>
  ) : (
    <span style={{ visibility: "hidden" }}>❤️</span>
  );
}

export default UserChance;
