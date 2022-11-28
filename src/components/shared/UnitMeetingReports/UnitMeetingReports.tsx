/* eslint-disable no-else-return */
import { Icon } from '@iconify/react';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';

import Loader from '@/components/lib/Loader';
import MeetingReportsTable from '@/components/lib/Tables/MeetingReportsTable';
import { useAppSelector } from '@/hooks';
import { useHandleOutsideClicks } from '@/hooks/useHandleOutsideClicks';
import { getAllMeetingReport } from '@/services/reports';
import queryKeys from '@/utils/api/queryKeys';
import compareDateStrings from '@/utils/compareDateStrings';
import { processResponse } from '@/utils/response/processResponse';

const UnitMeetingReports = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [allReports, setAllReports] = useState([]);
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const calender = useRef<null | HTMLDivElement>(null);
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();

  const query = {
    campusId: user?.campusId
      ? user.campusId
      : '3cece26c-e6c2-485a-9caa-9432be17b4be',
    unit: user?.unit ? user.unit : 'AMBIENCE_UNIT',
  };

  const { data, isFetching } = useQuery(
    [queryKeys.getAllMeetingReport, user?.unit, user?.campusId],
    () => getAllMeetingReport(query),
    {
      onSuccess(response) {
        const res = processResponse(response);

        if (res) {
          setAllReports(res.data.data);
        }
      },
    }
  );

  useEffect(() => {
    if (data) {
      const {
        data: { data: reports },
      } = data;
      const endOffset = itemOffset + 10;
      const sortedReports = compareDateStrings(reports, 'date');

      setAllReports(sortedReports);
      setCurrentItems(sortedReports.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(sortedReports.length / 10));
    }
  }, [itemOffset, data]);

  useHandleOutsideClicks(calender, () => setShow(false));

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % allReports.length;
    setItemOffset(newOffset);
  };

  const handleDateChange = (dateRange: [Date | null, Date | null]) => {
    const [start, end] = dateRange;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      {!isFetching && data.data.data?.length > 0 && (
        <div className="my-4 mb-7 flex items-center justify-between gap-3 md:justify-start">
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Search Date:
          </span>
          <div
            ref={calender}
            className="relative h-[34.97px] w-[80%] cursor-pointer rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-max"
          >
            <div
              onClick={() => setShow(!show)}
              className="flex items-center justify-between"
            >
              <span>{`${moment(startDate).format('MMM DD')} - ${moment(
                endDate
              ).format('MMM DD, YYYY')}`}</span>
              <span className="flex justify-end">
                <Icon
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  className="text-2xl"
                />
              </span>
            </div>
            {show && (
              <div className="absolute top-[110%] left-0">
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => handleDateChange(date)}
                  startDate={startDate}
                  minDate={new Date()}
                  endDate={endDate}
                  value={`${startDate}`}
                  selectsRange
                  inline
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className="flex w-max cursor-pointer items-center rounded-[13.2083px] border-[1.32083px] border-cci-black py-2 px-4"
        onClick={() => router.push(`${router.pathname}/write-report`)}
      >
        <Icon icon="mdi:plus" className="text-2xl" />
        <span className="font-[700]">New Meeting Report</span>
      </div>

      {isFetching && (
        <div className="relative h-full w-full">
          <Loader color="grey" className="absolute top-1/2 -translate-y-1/2" />
        </div>
      )}

      {!isFetching && data.data.data?.length === 0 && (
        <div className="mt-6">
          <p className="text-cci-red">No reports</p>
        </div>
      )}

      {!isFetching && data.data.data?.length > 0 && (
        <div className="w-full">
          <MeetingReportsTable
            tableData={currentItems}
            itemOffset={itemOffset}
          />

          <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
            <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
              Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
              {itemOffset + currentItems.length} of {data.data.data?.length}{' '}
              entries
            </span>

            <div>
              <ReactPaginate
                breakLabel="..."
                className="item-center flex w-max cursor-pointer rounded-[5px] text-sm text-[#10131866] md:text-base"
                activeClassName="bg-cci-black text-white py-1 px-2 lg:p-2"
                previousClassName="p-1 lg:p-2 border border-[#68686880]"
                nextClassName="p-1 lg:p-2 border border-[#68686880]"
                disabledClassName="p-1 lg:p-2"
                pageClassName="py-1 px-2 lg:p-2 border-y border-[#68686880]"
                nextLabel={<span>Next</span>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<span>Prev</span>}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnitMeetingReports;
