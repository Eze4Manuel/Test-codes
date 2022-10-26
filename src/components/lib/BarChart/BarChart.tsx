import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
};

const labels = ['Oct 2', 'Oct 9', 'Oct 16', 'Oct 23', 'Oct 30'];

export const data = {
  labels,
  datasets: [
    {
      data: [15, 2, 30, 4, 50],
      backgroundColor: '#686868',
      barThickness: 20,
      borderWidth: 4,
      borderColor: 'transparent',
      borderRadius: 20,
    },
    {
      data: [10, 20, 30, 45, 5],
      backgroundColor: '#00B232',
      barThickness: 20,
      borderWidth: 4,
      borderColor: 'transparent',
      borderRadius: 20,
    },
    {
      data: [20, 21, 32, 40, 19],
      backgroundColor: '#b20000',
      barThickness: 20,
      borderWidth: 4,
      borderColor: 'transparent',
      borderRadius: 20,
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
