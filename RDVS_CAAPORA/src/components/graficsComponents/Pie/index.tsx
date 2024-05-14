import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export function PieComponent({ generateRandomData }: any) {
  ChartJS.register(ArcElement, ChartDataLabels, Tooltip, Legend);
  
  const options = {
    plugins: {
      datalabels: {
        color: 'white'
      }
    }
  };

  const data = {
    labels: ["vlr_1", "vlr_2", "vlr_3"],
    datasets: [
      {
        label: "# of Votes",
        data: generateRandomData(3),
        backgroundColor: ["#015950", "#FEA327", "#59868A"],
        borderColor: ["#015950", "#FEA327", "#59868A"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data}  options={options}/>;
}
