import 'react-datepicker/dist/react-datepicker.css';

import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ReactPaginate from 'react-paginate';

import UnitReportsTable from '@/components/lib/Tables/UnitReportsTable/UnitReportsTable';
import { useMediaQuery } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';
import { dummyUnitReports, entries } from '@/utils/constants';

const UnitReport = () => {
  const data = dummyUnitReports;

  const [currentItems, setCurrentItems] = useState(data);
  const smallScreen = useMediaQuery('(max-width:1440px)');
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showDate, setShowDate] = useState(false);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % data.length;
    setItemOffset(newOffset);
  };

  const handleDateChange = (dateRange: any) => {
    const [start, end] = dateRange;
    setStartDate(start);
    setEndDate(end);
  };

  const toggleDate = () => {
    setShowDate(!showDate);
  };

  useEffect(() => {
    if (data) {
      const endOffset = itemOffset + 10;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / 10));
    }
  }, [itemOffset, data]);

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
        <div className="md:flex md:justify-between">
          <div className="my-4 flex w-full items-center justify-between gap-3 md:basis-[40%] xl:basis-[30%]">
            <span className="font-[700] text-cci-black">Show:</span>
            <select className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[80%]">
              {entries.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.entry}
                </option>
              ))}
            </select>
          </div>

          <div className="my-4 flex w-full items-center justify-between gap-3 md:basis-[40%] xl:basis-[30%]">
            <span className="whitespace-nowrap font-[700] text-cci-black">
              {smallScreen ? 'Date:' : 'Search Date:'}
            </span>
            <div
              onClick={toggleDate}
              className="relative h-[34.97px] w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]"
            >
              {showDate && (
                <div className="absolute top-[80%] left-0">
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => handleDateChange(date)}
                    startDate={startDate}
                    minDate={startDate}
                    endDate={endDate}
                    value={`${startDate} - ${endDate}`}
                    selectsRange
                    inline
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full">
          <UnitReportsTable tableData={currentItems} itemOffset={0} />
          <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
            <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
              Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
              {itemOffset + currentItems.length} of {data?.length} entries
            </span>

            <div>
              <ReactPaginate
                breakLabel="..."
                className="item-center flex w-max cursor-pointer rounded-[5px] px-2 text-sm text-[#10131866] md:text-base"
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
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
