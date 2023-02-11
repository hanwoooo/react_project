import React from "react";
import image from "./subway_line.PNG";
import "./styles.css";
function Subway() {
  var api =
    "http://data.seoul.go.kr/dataList/datasetView.do?infId=OA-12764&srvType=A&serviceKind=1&currentPageNo=1";
  return (
    <div>
      <img src={image} />
      <div className="Subway">
        <h1>출발지</h1>
        <h1>목적지</h1>
        <h2>최소요금</h2>
        <h2>최소환승</h2>
      </div>
    </div>
  );
}
export default Subway;
