window.onload = function () {
  import React from "react";
  import { createRoot } from "react-dom/client";
  function Subway() {
    var api =
      "http://data.seoul.go.kr/dataList/datasetView.do?infId=OA-12764&srvType=A&serviceKind=1&currentPageNo=1";
    return (
      <div>
        <h1>호선</h1>
      </div>
    );
  }
};