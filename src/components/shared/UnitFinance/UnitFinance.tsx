import React, { useState } from 'react';

import Button from '@/components/lib/Button';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';

import UnitFinanceChart from './UnitFinanceChart/UnitFinanceChart';
import UnitFinanceData from './UnitFinanceData/UnitFinanceData';

const UnitFinance = () => {
  const [activeID, setActiveID] = useState(0);

  return (
    <div className="grid w-full gap-10">
      <div className="w-full justify-between md:flex">
        <div className="flex w-full  items-center gap-3 ">
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Search Month
          </span>
          <select className="w-full rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[35%] lg:w-[20%] ">
            <option value="">November</option>
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

      <div className="w-full overflow-hidden">
        {activeID === 0 ? <UnitFinanceData /> : <UnitFinanceChart />}
      </div>
    </div>
  );
};

export default UnitFinance;