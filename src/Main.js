import React from "react";
function Main() {
  //
  function click() {
    window.location.replace("/Subway");
  }
  return (
    <div>
      <h1>Hello customer</h1>
      <h2>Subway station App!</h2>

      <button
        style={{
          width: "200px",
          height: "100px",
          borderRadius: 10,
          backgroundColor: "white",
          color: "#1E90FF",
        }}
        onClick={click}
      >
        시작
      </button>
    </div>
  );
}
export default Main;
