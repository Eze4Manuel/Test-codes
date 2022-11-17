import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Button from '@/components/lib/Button';
import Loader from '@/components/lib/Loader';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';
import { monthData } from '@/data/unitFinance';
import { useAppSelector } from '@/hooks';
import { getAllFinanceHistory } from '@/services/unitFinance';
import { processResponse } from '@/utils/response/processResponse';

import type { MonthlyFinanceHistory } from '../../../services/unitFinance/payload';
import UnitFinanceChart from './UnitFinanceChart/UnitFinanceChart';
import UnitFinanceData from './UnitFinanceData/UnitFinanceData';

const UnitFinance = () => {
  const { user } = useAppSelector((state) => state.user);

  const [activeID, setActiveID] = useState(0);
  const [allFinanceData, setAllFinanceData] = useState<MonthlyFinanceHistory>();
  const [month, setMonth] = useState('JANUARY');

  const { isLoading } = useQuery([month], () => getAllFinanceHistory(month), {
    onSuccess(response) {
      const data = processResponse(response);

      if (data) {
        setAllFinanceData(data);
      }
    },
    enabled: !!user?.ccid,
  });

  return (
    <div className="grid w-full gap-10">
      <div className="w-full justify-between md:flex">
        <div className="flex w-full  items-center gap-3 ">
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Search Month
          </span>
          <select
            onChange={(e) => setMonth(e.target.value)}
            className="w-full rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[35%] lg:w-[20%] "
          >
            {monthData.map((item, index) => (
              <option className="cursor-pointer" key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <ToggleTwoStates
          setActiveID={setActiveID}
          activeID={activeID}
          list={['Data', 'Chart']}
        />
      </div>
      <div className="w-full md:w-[30%]">
        <Button size="large" variant="outline" className=" w-full ">
          + Request Weekly Budget
        </Button>
      </div>

      {isLoading ? (
        <Loader color="#000000" small={false} />
      ) : (
        <div className="w-full overflow-hidden">
          {activeID === 0 ? (
            <UnitFinanceData data={allFinanceData} />
          ) : (
            <UnitFinanceChart data={allFinanceData} />
          )}
        </div>
      )}
    </div>
  );
};

export default UnitFinance;
