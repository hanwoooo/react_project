import React from "react";
import "./styles.css";
// 메인 화면
function Main() {
  // 버튼 클릭 이벤트
  function click() {
    //href는 뒤로가기가 가능, replace는 뒤로가기 불가능
    window.location.href="/Subway";
  }
  return (
    <div>
      <h1>Hello customer</h1>
      <br />
      <h2>Subway station App!</h2>
      <br />
      <br />
      <br />
      <br />

      <button id="btn" onClick={click}>
        시작
      </button>
    </div>
  );
}
export default Main;
