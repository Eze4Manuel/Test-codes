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
      <div className="justify-between md:flex">
        {chartCardsData.map((item, index) => (
          <div
            key={index}
            className=" mt-6 flex w-full justify-between rounded-lg border border-cci-grey-dim2 bg-[#F0F0F0] p-4 md:w-[30%]"
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
              <div className="relative hidden bg-[#f0f0f0] xl:block">
                <SingleDonut data={'83%'} />
                <p className=" absolute bottom-14 left-10">83%</p>
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
