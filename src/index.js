import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Main(){
  function click()
  {
    window.location.replace('/Subway');
  }
  return(
    <div>
      <h1>Hello customer</h1>
      <h2>Subway station App!</h2>
      
      <button style={{
        width:"200px",
        height:"100px",
        borderRadius: 10,
        backgroundColor:"#1E90FF",
        color:"white"
      }}
      onClick={click}>
        시작
      </button>
    </div>
  );
}

function Subway(){
  var api = "	http://data.seoul.go.kr/dataList/datasetView.do?infId=OA-12764&srvType=A&serviceKind=1&currentPageNo=1";
  return(
    <div>
      <h1>호선</h1>
    </div>
  );
}

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
