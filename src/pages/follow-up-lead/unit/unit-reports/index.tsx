import { Icon } from '@iconify/react';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';

import Loader from '@/components/lib/Loader';
import UnitReportsTable from '@/components/lib/Tables/UnitReportsTable/UnitReportsTable';
import { useAppSelector, useMediaQuery } from '@/hooks';
import { useHandleOutsideClicks } from '@/hooks/useHandleOutsideClicks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import { getAllUnitReports } from '@/services/reports';
import Meta from '@/templates/Meta';
import { entries } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

const UnitReport = () => {
  const { user } = useAppSelector((state) => state.user);

  const query = {
    campusId: user?.campusId
      ? user.campusId
      : '3cece26c-e6c2-485a-9caa-9432be17b4be',
    unit: user?.unit ? user.unit : 'AMBIENCE_UNIT',
  };

  const { data, isFetching } = useQuery(
    'getAllUnitReports',
    () => getAllUnitReports(query),
    {
      onSuccess(response) {
        const reports = processResponse(response);
        return reports;
      },
    }
  );

  const [currentItems, setCurrentItems] = useState([]);
  const [allReports, setAllReports] = useState([]);
  const smallScreen = useMediaQuery('(max-width:1440px)');
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const calender = useRef<null | HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % allReports.length;
    setItemOffset(newOffset);
  };

  const handleDateChange = (dateRange: any) => {
    const [start, end] = dateRange;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (data) {
      const {
        data: { data: reports },
      } = data;
      const endOffset = itemOffset + 10;
      setAllReports(reports);
      setCurrentItems(reports.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(reports.length / 10));
    }
  }, [itemOffset, data]);

  useHandleOutsideClicks(calender, () => setShow(false));

  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Follow-up Unit Lead"
          description="Unit report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        {isFetching && (
          <div className="relative h-full w-full">
            <Loader
              color="grey"
              className="absolute top-1/2 -translate-y-1/2"
            />
          </div>
        )}

        {!isFetching && allReports?.length === 0 && (
          <div className="mt-6">
            <p className="text-cci-red">No reports</p>
          </div>
        )}

        {!isFetching && allReports?.length > 0 && (
          <>
            <div className="md:flex md:justify-between">
              <div className="my-4 flex w-full items-center justify-between gap-3 md:w-max md:basis-[40%] xl:basis-[30%] 2xl:basis-[25%]">
                <span className="font-[700] text-cci-black">Show:</span>
                <select className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[80%]">
                  {entries.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.entry}
                    </option>
                  ))}
                </select>
              </div>

              <div className="my-4 flex w-full items-center justify-between gap-3 md:w-max">
                <span className="whitespace-nowrap font-[700] text-cci-black">
                  {smallScreen ? 'Date:' : 'Search Date:'}
                </span>
                <div
                  ref={calender}
                  className="relative h-[34.97px] w-[80%] cursor-pointer rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]"
                >
                  <div
                    onClick={() => setShow(!show)}
                    className="flex items-center justify-between gap-2"
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
                        selectsRange
                        inline
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full">
              <UnitReportsTable
                tableData={currentItems}
                itemOffset={itemOffset}
              />
              <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
                <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
                  Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
                  {itemOffset + currentItems.length} of {allReports?.length}{' '}
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
          </>
        )}
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
