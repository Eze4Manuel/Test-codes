import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import type { DonutProps } from './SingleDonut.props';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  tooltips: { enabled: false },
};

const SingleDonut = ({ data }: DonutProps) => {
  const donutData = {
    labels: ['expenditure'],
    datasets: [
      {
        data,
        backgroundColor: ['#00B232', '#F0F2F5'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={donutData} className="w-28" />
    </div>
  );
};

export default SingleDonut;
