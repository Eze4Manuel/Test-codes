import type { FC } from 'react';
import React from 'react';

import BarChart from '@/components/lib/BarChart/BarChart';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import SingleDonut from '@/components/lib/SingleDonut/SingleDonut';
import { unitFinance } from '@/data/chartLabelData';

import type { UnitFinancePros } from '../UnitFinance.props';

const UnitFinanceChart: FC<UnitFinancePros> = ({ data }) => {
  const chartCardsData = [
    {
      id: 1,
      header: 'Balance',
      price: data?.balance,
      subHeader: '17% of cash inflow',
      color: '#00B232',
    },
    {
      id: 2,
      header: 'Cash Inflow',
      price: data?.totalInflow,
      subHeader: '80% of requested budget',
      color: '#686868',
    },
    {
      id: 3,
      header: 'Expenditure',
      price: data?.totalExpenditure,
      subHeader: 'Compared to last month',
      color: ' #B20000',
    },
  ];

  const unitFinanceData = {
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
      <div className="flex flex-wrap justify-between gap-5">
        {chartCardsData.map((item, index) => (
          <div
            key={index}
            className="mt-6 flex w-full flex-1 items-center justify-between rounded-lg border border-cci-grey-dim2 bg-[#F0F0F0] p-4"
          >
            <div>
              <h2 className="font-bold">{item.header}</h2>
              <p
                className="mt-4 text-2xl font-bold"
                style={{ color: `${item.color}` }}
              >
                NGN {item.price}
              </p>
              <p className="mt-6 text-cci-grey-dim2">{item.subHeader}</p>
            </div>
            {index === 0 && (
              <div className="relative bg-[#f0f0f0] xl:block">
                <SingleDonut data={'83%'} />
                <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  83%
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {data?.histories.length === 0 ? (
        <div className="my-20 flex items-center justify-center">
          <p className="text-2xl font-bold">No Finance history for the month</p>
        </div>
      ) : (
        <div className="mt-10">
          <div className="items-center justify-between font-bold md:flex">
            <h1>Cash Inflow/Expenditure</h1>
            <ChartLabel data={unitFinance} />
          </div>

          <div className="mt-10">
            <BarChart data={unitFinanceData} />
          </div>
        </div>
      )}
    </>
  );
};

export default UnitFinanceChart;
