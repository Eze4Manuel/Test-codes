import React from 'react';

import BarChart from '@/components/lib/BarChart/BarChart';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import SingleDonut from '@/components/lib/SingleDonut/SingleDonut';
import { unitFinanceData } from '@/data/barChartData';
import { unitFinance } from '@/data/chartLabelData';
import { chartCardsData } from '@/data/unitFinance';

const UnitFinanceChart = () => {
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
                {item.price}
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
      <div className="mt-10">
        <div className="items-center justify-between font-bold md:flex">
          <h1>Cash Inflow/Expenditure</h1>
          <ChartLabel data={unitFinance} />
        </div>
        <div className="mt-10">
          <BarChart data={unitFinanceData} />
        </div>
      </div>
    </>
  );
};

export default UnitFinanceChart;
