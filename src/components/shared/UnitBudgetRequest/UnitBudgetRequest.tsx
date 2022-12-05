import moment from 'moment';
import React, { useState } from 'react';

import UnitBudgetRequestTable from '@/components/lib/UnitBudgetRequestTable/UnitBudgetRequestTable';

import useGetDate from '../../../hooks/useGetDate';

const UnitBudgetrequest = () => {
  const { firstDay, lastDay } = useGetDate();
  const [startDate, setStartDate] = useState(
    moment(firstDay).format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = useState(moment(lastDay).format('YYYY-MM-DD'));

  return (
    <div>
      <div className="gap-4 md:flex ">
        <div className="my-4 flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
          <span className="font-[700] text-cci-black">From</span>
          <input
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]"
          />
        </div>

        <div className="my-4 flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
          <span className="font-[700] text-cci-black ">To</span>
          <input
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]"
          />
        </div>
      </div>
      <div>
        <UnitBudgetRequestTable startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
};

export default UnitBudgetrequest;
