import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Main from "./Main";
import Subway from "./Subway";

// 전체 App을 다루는 js
// router를 사용해서 주소 값을 보고 페이지를 바꾼다.
const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/Subway" element={<Subway />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
