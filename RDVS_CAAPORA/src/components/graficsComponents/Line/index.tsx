import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export function LineComponent({ generateRandomData }: any) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      datalabels: {
        color: 'black',
        align: 'top' as 'top',
        anchor: 'end' as 'end'        
      }
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: generateRandomData(7),
        borderColor: "#015950",
        backgroundColor: "#015950",
      },
      {
        label: "Dataset 2",
        data: generateRandomData(7),
        borderColor: "#FEA327",
        backgroundColor: "#FEA327",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
