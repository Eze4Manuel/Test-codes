import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import type { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

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

export const data = {
  labels: ['Men', 'Women', 'Children'],
  datasets: [
    {
      data: [3500, 4000, 1000],
      backgroundColor: ['#686868', '#F0F2F5', '#F0F2F5'],
      borderWidth: 5,
    },
    {
      data: [4000, 3500, 1000],
      backgroundColor: ['#00B232', '#F0F2F5', '#F0F2F5'],
      borderWidth: 5,
    },

    {
      data: [1000, 4000, 3500],
      backgroundColor: ['#b20000 ', '#F0F2F5', '#F0F2F5'],
      borderWidth: 5,
    },
  ],
};

const DonutChart: FC = () => {
  return (
    <div>
      {' '}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
