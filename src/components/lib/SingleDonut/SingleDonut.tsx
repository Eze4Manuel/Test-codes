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
        backgroundColor: ['#00B232', 'rgba(0, 178, 50, 0.12)'],
        borderWidth: 10,
        borderColor: '#F0F0F0',
      },
    ],
  };
  return (
    <div>
      <Doughnut data={donutData} className="w-28 " options={options} />
    </div>
  );
};

export default SingleDonut;
