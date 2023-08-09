import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import {
  LineElement,
  CategoryScale, // x axis
  LinearScale,
  PointElement, // y axis
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ChartLine1() {
  const data = {
    labels: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
    datasets: [
      {
        label: "Train",
        data: [0.25, 0.27, 0.29, 0.31, 0.35, 0.4, 0.45],
        backgroundColor: "aqua",
        borderColor: "blue",
        pointBorderColor: "aqua",
        fill: false,
      },
      {
        label: "Test",
        data: [0.25, 0.39, 0.52, 0.43, 0.33, 0.43, 0.55],
        backgroundColor: "aqua",
        borderColor: "gold",
        pointBorderColor: "aqua",
        fill: false,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        min: 0.0,
        max: 3.0,
      },
      y: {
        min: 0.25,
        max: 0.55,
        ticks: {
          stepSize: 0.05,
        },
      },
    },
    layout: {
      padding: {
        right: 20, // Căn lề phải
      },
    },
    maintainAspectRatio: false, // Chạy biểu đồ theo kích thước mà bạn thiết lập
  };

  // Thêm khung bố cục tùy chỉnh để hiển thị các đường Line
  const customLegend = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: "5px",
        borderRadius: "5px",
        margin: "5px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", // Hiệu ứng nổi khung
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "blue",
            marginRight: "5px",
          }}
        ></div>
        <span>Train</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "gold",
            marginRight: "5px",
          }}
        ></div>
        <span>Test</span>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Căn giữa theo chiều ngang
        }}
      >
        <h1>Accuracy</h1>
        <div
          style={{
            width: "700px",
            height: "300px", // Chỉnh kích thước cho biểu đồ nhỏ lại
          }}
        >
          <Line data={data} options={options} />
        </div>
        {customLegend}
      </div>
    </div>
  );
}

export default ChartLine1;
