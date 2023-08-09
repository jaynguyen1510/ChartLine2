import React from "react";
import ChartLine1 from "./ChartLine1";
import ChartLine2 from "./ChartLine2";
import { useState } from "react";
import "./App.css"; // Import tệp CSS vừa tạo

function App() {
  const [showChart, setShowChart] = useState(null);
  // console.log(showChart);
  const handleClickChart = (chartNumber) => {
    if (chartNumber === showChart) {
      setShowChart(null);
    } else {
      setShowChart(chartNumber);
    }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button
          className={`button ${showChart === 1 ? "active" : ""}`}
          onClick={() => handleClickChart(1)}
        >
          1
        </button>
        <button
          className={`button ${showChart === 2 ? "active" : ""}`}
          onClick={() => handleClickChart(2)}
        >
          2
        </button>
      </div>
      {showChart === 1 && <ChartLine1 />}
      {showChart === 2 && <ChartLine2 />}
    </div>
  );
}

export default App;
