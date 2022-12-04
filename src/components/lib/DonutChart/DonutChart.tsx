import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import type { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

import type { AttendanceCardExtraProps } from '../AttendanceCard/types';

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

const DonutChart: FC<AttendanceCardExtraProps> = ({ donutData }) => {
  const data = {
    datasets: [
      {
        data: [donutData?.Men, donutData?.Women, donutData?.Kids],
        backgroundColor: ['#686868', '#F0F2F5', '#F0F2F5'],
        borderWidth: 5,
      },
      {
        data: [donutData?.Women, donutData?.Men, donutData?.Kids],
        backgroundColor: ['#00B232', '#F0F2F5', '#F0F2F5'],
        borderWidth: 5,
      },

      {
        data: [donutData?.Kids, donutData?.Men, donutData?.Women],
        backgroundColor: ['#b20000 ', '#F0F2F5', '#F0F2F5'],
        borderWidth: 5,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} className="w-full" />
    </div>
  );
};

export default DonutChart;
