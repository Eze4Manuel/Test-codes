import type { FC } from 'react';
import React from 'react';

import BarChart from '@/components/lib/BarChart/BarChart';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import { kidsAttendance } from '@/data/chartLabelData';

import CelebKidsCheckBoxes from './celebKidsCheckBoxes';
import type { KidAttendancePros } from './kidAttendance.props';

const KidAttendanceChart: FC<KidAttendancePros> = ({ data }) => {
  const kidsAttendanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [
          data?.histories[0]?.inflow,
          data?.histories[1]?.inflow,
          data?.histories[2]?.inflow,
          data?.histories[3]?.inflow,
        ],
        backgroundColor: '#686868',
        barThickness: 20,
        borderWidth: 4,
        borderColor: 'transparent',
        borderRadius: 20,
      },
      {
        data: [
          data?.histories[0]?.expenditure,
          data?.histories[1]?.expenditure,
          data?.histories[2]?.expenditure,
          data?.histories[3]?.expenditure,
        ],
        backgroundColor: '#b20000',
        barThickness: 20,
        borderWidth: 4,
        borderColor: 'transparent',
        borderRadius: 20,
      },
    ],
  };
  return (
    <>
      {data?.histories.length === 0 ? (
        <div className="my-20 flex items-center justify-center">
          <p className="text-2xl font-bold">No Finance history for the month</p>
        </div>
      ) : (
        <div className="mt-4">
          <CelebKidsCheckBoxes />
          <div className="items-center justify-between font-bold md:flex">
            <h1>Total Kids Attendance</h1>
            <ChartLabel data={kidsAttendance} />
          </div>
          <div className="mt-10">
            <BarChart data={kidsAttendanceData} />
          </div>
        </div>
      )}
    </>
  );
};

export default KidAttendanceChart;
