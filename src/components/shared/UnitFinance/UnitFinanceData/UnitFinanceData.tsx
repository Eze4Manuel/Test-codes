import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import UnitFinanceTable from '@/components/lib/UnitFinanceTable/UnitFinanceTable';
import { data } from '@/data/unitFinance';

const UnitFinanceData = () => {
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (data) {
      const endOffset = itemOffset + 10;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / 10));
    }
  }, [itemOffset, data]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <>
        <div>
          <UnitFinanceTable tableData={currentItems} />
        </div>
        <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
          <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
            Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
            {itemOffset + currentItems.length} of {data.length} entries
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
      </>
    </div>
  );
};

export default UnitFinanceData;
