import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import {
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ChartLine2() {
  const data = {
    labels: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
    datasets: [
      {
        label: "Train",
        data: [1.4, 1.39, 1.37, 1.35, 1.33, 1.3, 1.27], // Điền dữ liệu vào đây
        backgroundColor: "aqua",
        borderColor: "blue",
        pointBorderColor: "aqua",
        fill: false,
      },
      {
        label: "Test",
        data: [1.38, 1.37, 1.36, 1.3, 1.23, 1.2, 1.17], // Điền dữ liệu vào đây
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
        min: 1.15,
        max: 1.4,
        ticks: {
          stepSize: 0.05,
        },
      },
    },
    layout: {
      padding: {
        right: 20,
      },
    },
    maintainAspectRatio: false,
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
        <h1>Loss</h1>
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

export default ChartLine2;
