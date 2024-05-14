import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export function BarComponent({ generateRandomData }: any) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels,
    Title,
    Tooltip,
    Legend,
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
      datalabels: {
        color: 'black',
        align: 'top' as 'top',
        anchor: 'end' as 'end'        
      }
    },
  };

  const labels = ["January", "February", "March", "April", "May"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: generateRandomData(5),
        backgroundColor: "#015950",
      },
      {
        label: "Dataset 2",
        data: generateRandomData(5),
        backgroundColor: "#FEA327",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
