import React from "react";
import image from "./subway_line.PNG";
import "./styles.css";
function Subway() {
  return (
    <div>
      <img id="img" src={image} alt="profile" />
      <div className="Subway">
        <h2>
          <br />
          출발지
        </h2>
        <input id="start" placeholder="left click" disabled></input>
        <h2>목적지</h2>
        <br />
        <input id="end" placeholder="right click" disabled></input>
        <h3>걸리는 시간</h3>
        <input id="time" disabled></input>
        <h2>최소요금</h2>
        <input id="money" disabled></input>
        <h2>최소환승</h2>
        <input id="change" disabled></input>
      </div>
    </div>
  );
}
export default Subway;
