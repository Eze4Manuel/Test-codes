import React, { useState } from 'react';

import ApprovedUnitBudgetRequestTable from '@/components/lib/ApprovedUnitBudgetRequestTable/ApprovedUnitBudgetRequestTable';
import RequestStatusIndicator from '@/components/lib/RequestStatusIndicator/RequestStatusIndicator';
import UnitBudgetRequestTable from '@/components/lib/UnitBudgetRequestTable/UnitBudgetRequestTable';

const UnitBudgetrequest = () => {
  const [status] = useState('Budget Approved');
  const stateFullTable = true;
  return (
    <div>
      <div className="gap-4 md:flex ">
        <div className="my-4 flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
          <span className="font-[700] text-cci-black">From</span>
          <input
            type="date"
            className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]"
          />
        </div>

        <div className="my-4 flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
          <span className="font-[700] text-cci-black ">To</span>
          <input
            type="date"
            className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]"
          />
        </div>
        <div className="my-4 ml-auto flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
          <RequestStatusIndicator status={status} />
        </div>
      </div>
      <div>
        {stateFullTable && status === 'Budget Approved' ? (
          <ApprovedUnitBudgetRequestTable />
        ) : (
          <UnitBudgetRequestTable />
        )}
      </div>
    </div>
  );
};

export default UnitBudgetrequest;
