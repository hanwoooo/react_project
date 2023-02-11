import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Subway from "./Subway";

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
