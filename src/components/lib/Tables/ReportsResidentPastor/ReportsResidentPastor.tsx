import { useRouter } from 'next/router';
import type { FC } from 'react';
import ReactPaginate from 'react-paginate';

import type ReportsResidentPastorTypes from './ReportsResidentPastor.props';

const ReportsResidentPastor: FC<ReportsResidentPastorTypes> = ({
  tableData,
  handlePageClick,
  itemOffset,
  data,
  pageCount,
}) => {
  const router = useRouter();
  return (
    <div>
      <div className="mt-12 w-full lg:mt-14">
        <table className="block overflow-x-scroll md:overflow-x-hidden">
          <thead className="block w-full">
            <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-6">
              <th className="min-w-[20%] border-b border-[#686868] pr-6 text-left">
                S/N
              </th>
              <th className="min-w-[30%] border-b border-[#686868]  px-4 text-left">
                Service Unit
              </th>
              <th className="min-w-[30%] border-b border-[#686868]  px-4 text-left">
                Date
              </th>
              <th className="col-span-2 min-w-[70%] border-b border-[#686868]  px-4 text-left">
                Report
              </th>
              <th className="min-w-[30%] border-b border-[#686868] pr-6 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="block w-full">
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="flex cursor-pointer text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-6"
                onClick={() =>
                  router.push(`${router.pathname}/view/${item.id}`)
                }
              >
                <td className="min-w-[20%] border-b border-[#68686880] py-4 text-left">
                  {itemOffset >= 10 ? itemOffset + index + 1 : index + 1}
                </td>

                <td className="min-w-[30%] border-b border-[#68686880] p-4 text-left">
                  {item.service_unit}
                </td>

                <td className="min-w-[30%] border-b border-[#68686880] p-4 text-left">
                  {item.date}
                </td>

                <td className="col-span-2 min-w-[70%] border-b border-[#68686880] p-4 text-left capitalize">
                  {item.report}
                </td>
                <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left font-[500] text-cci-green">
                  View Report
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
          <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
            Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
            {itemOffset + tableData.length} of {data?.data?.data?.length}{' '}
            entries
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
    </div>
  );
};

export default ReportsResidentPastor;
