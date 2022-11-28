import moment from 'moment';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import ApprovedUnitBudgetRequestTable from '@/components/lib/ApprovedUnitBudgetRequestTable/ApprovedUnitBudgetRequestTable';
import RequestStatusIndicator from '@/components/lib/RequestStatusIndicator/RequestStatusIndicator';
import UnitBudgetRequestTable from '@/components/lib/UnitBudgetRequestTable/UnitBudgetRequestTable';
import { useAppSelector } from '@/hooks';
import { getSingleBudgetRequest } from '@/services/budgetrequest';
import type { SingleBudgetRequestData } from '@/services/budgetrequest/payload';
import { processResponse } from '@/utils/response/processResponse';

import useGetDate from '../../../hooks/useGetDate';

const UnitBudgetrequest = () => {
  const { user } = useAppSelector((state) => state.user);
  const { firstDay, lastDay } = useGetDate();
  const [startDate, setStartDate] = useState(
    moment(firstDay).format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = useState(moment(lastDay).format('YYYY-MM-DD'));
  const [table, setTable] = useState(true);

  const [budgetData, setBudgetData] = useState<SingleBudgetRequestData>();

  const { isLoading } = useQuery(
    [(startDate && endDate) || (endDate && startDate)],
    () =>
      getSingleBudgetRequest({
        start: startDate,
        end: endDate,
      }),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setBudgetData(data);
        }
      },
      enabled: !!user?.ccid,
    }
  );

  const toggleTableType = () => {
    setTable((prev) => !prev);
  };

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
        {budgetData?.status && table && (
          <div className="my-4 ml-auto flex  items-center justify-between gap-3 md:basis-[35%] lg:basis-[25%]">
            <RequestStatusIndicator status={budgetData?.status} />
          </div>
        )}
      </div>
      <div>
        {table ? (
          <div>
            <div className="my-10 text-xl">
              <p>
                Budget request from {startDate} to {endDate}
              </p>
            </div>
            <ApprovedUnitBudgetRequestTable
              data={budgetData}
              loading={isLoading}
              toggleTableType={toggleTableType}
            />
          </div>
        ) : (
          <UnitBudgetRequestTable
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            toggleTableType={toggleTableType}
          />
        )}
      </div>
    </div>
  );
};

export default UnitBudgetrequest;
