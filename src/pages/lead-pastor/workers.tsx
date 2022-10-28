import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';

import Dropdown2 from '@/components/lib/Dropdown2';
import Loader from '@/components/lib/Loader';
import WorkersCard from '@/components/lib/WorkersCard/WorkersCard';
import WorkersTable from '@/components/lib/WorkersTable/WorkersTable';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import leadPastorWorkersTabs from '@/layouts/TabViewLayout/leadPastor/leadPastorWorkersTab';
import getAllWorkers from '@/services/workers';
import Meta from '@/templates/Meta';
import { cciCampuses } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

const Workers = () => {
  const { isLoading, data } = useQuery('fetchWorkers', getAllWorkers, {
    onSuccess(response) {
      const tableData = processResponse(response);
      return tableData;
    },
  });

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (data) {
      const endOffset = itemOffset + 10;
      setCurrentItems(data.data.data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.data.data.length / 10));
    }
  }, [itemOffset, data]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % data.data.data.length;
    setItemOffset(newOffset);
  };

  return (
    <AuthLayout
      meta={
        <Meta
          title="Workers | Lead Pastor"
          description="List of workers for the lead pastor"
        />
      }
    >
      <section>
        <TabViewLayout
          tabs={leadPastorWorkersTabs}
          rightComponent={
            <div className="md:py-2 lg:absolute lg:top-[1.25rem] lg:right-[1.25rem] lg:py-0">
              <Dropdown2 options={cciCampuses} />
            </div>
          }
        >
          <section className="w-full">
            <div className="md:flex md:justify-between">
              <div className="my-4 flex w-full items-center justify-between gap-3 md:basis-[40%] lg:basis-[30%]">
                <span className="font-[700] text-cci-black">Show:</span>
                <select className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[80%]">
                  <option value="">All units</option>
                </select>
              </div>

              <div className="my-4 flex w-full items-center justify-between gap-3 md:basis-[40%] lg:basis-[30%]">
                <span className="font-[700] text-cci-black">Search:</span>
                <input className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]" />
              </div>
            </div>

            <WorkersCard />

            {isLoading ? (
              <Loader color="grey" />
            ) : (
              <div className="w-full">
                <WorkersTable
                  tableData={currentItems}
                  itemOffset={itemOffset}
                />
                <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
                  <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
                    Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
                    {itemOffset + currentItems.length} of{' '}
                    {data.data.data.length} entries
                  </span>

                  <div>
                    <ReactPaginate
                      breakLabel="..."
                      className="item-center flex w-max cursor-pointer rounded-[5px] border border-[#68686880] px-2 text-sm text-[#10131866] md:text-base"
                      activeClassName="bg-cci-black text-white py-1 px-2 lg:p-2"
                      previousClassName="p-1 lg:p-2"
                      nextClassName="p-1 lg:p-2"
                      disabledClassName="p-1 lg:p-2"
                      pageClassName="py-1 px-2 lg:p-2"
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
          </section>
        </TabViewLayout>
      </section>
    </AuthLayout>
  );
};

export default Workers;
