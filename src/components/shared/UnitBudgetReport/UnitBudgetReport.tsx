import moment from 'moment';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import ApprovedUnitBudgetRequestTable from '@/components/lib/ApprovedUnitBudgetRequestTable/ApprovedUnitBudgetRequestTable';
import RequestStatusIndicator from '@/components/lib/RequestStatusIndicator/RequestStatusIndicator';
import { useAppSelector } from '@/hooks';
import useGetDate from '@/hooks/useGetDate';
import { getSingleBudgetRequest } from '@/services/budgetrequest';
import type { SingleBudgetRequestData } from '@/services/budgetrequest/payload';
import queryKeys from '@/utils/api/queryKeys';
import { processResponse } from '@/utils/response/processResponse';

const UnitBudgetReport = () => {
  const { user } = useAppSelector((state) => state.user);
  const { firstDay, lastDay } = useGetDate();
  const [startDate, setStartDate] = useState(
    moment(firstDay).format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = useState(moment(lastDay).format('YYYY-MM-DD'));

  const [budgetData, setBudgetData] =
    useState<SingleBudgetRequestData | null>();

  const { isLoading } = useQuery(
    [queryKeys.getAllBudgetRequest, startDate, endDate],
    () =>
      getSingleBudgetRequest({
        start: startDate,
        end: endDate,
        unit: user?.unit,
      }),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setBudgetData(data);
        } else {
          setBudgetData(null);
        }
      },
      enabled: !!user?.ccid,
    }
  );

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
        {budgetData?.status && (
          <div className="my-4 ml-auto flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
            <RequestStatusIndicator status={budgetData?.status} />
          </div>
        )}
      </div>
      <div>
        <ApprovedUnitBudgetRequestTable data={budgetData} loading={isLoading} />
      </div>
    </div>
  );
};

export default UnitBudgetReport;
