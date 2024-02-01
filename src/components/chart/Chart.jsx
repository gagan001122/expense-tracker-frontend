import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Arial, sans-serif",
            size: 14,
            style: "italic",
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: "Arial, sans-serif",
          size: 14,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            family: "Arial, sans-serif",
            size: 16,
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
          font: {
            family: "Arial, sans-serif",
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl">
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
