import { useRouter } from 'next/router';
import type { FC } from 'react';
import ReactPaginate from 'react-paginate';

import { cciCampuses, genders, serviceUnits } from '@/utils/constants';

import Dropdown3 from '../Dropdown3';
import Input2 from '../Input2';
import type MembersTableProps from './MembersTable.props';

const MembersTable: FC<MembersTableProps> = ({
  itemOffset,
  members,
  data,
  handlePageClick,
  pageCount,
}) => {
  const router = useRouter();
  return (
    <section className="mt-[50px]">
      <table className="block overflow-x-scroll md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-10">
            <th className="min-w-[20%] border-b border-[#686868] pr-4 text-left">
              S/N
            </th>
            <th className="col-span-3 min-w-[60%] border-b border-[#686868]  px-4 text-left">
              Full Name
            </th>
            <th className="col-span-2 min-w-[40%] border-b border-[#686868]  px-4 text-left">
              Gender
            </th>
            <th className="col-span-2 min-w-[40%] border-b border-[#686868] px-4 text-left">
              Campus
            </th>
            <th className="col-span-2 min-w-[40%] border-b border-[#686868] pl-4 text-left">
              Service Unit
            </th>
          </tr>
        </thead>

        <tbody className="block w-full">
          <tr className="flex h-[60px] text-sm font-[500] md:grid md:grid-cols-10">
            <th className="flex min-w-[20%] items-center border-b border-[#686868] pr-4 text-left">
              #
            </th>
            <th className="col-span-3 flex min-w-[60%] items-center border-b border-[#686868] pr-6 text-left">
              <span>
                <Input2 />
              </span>
            </th>
            <th className="col-span-2 flex min-w-[40%] items-center  border-b border-[#686868] px-4 text-left">
              <span className="w-full">
                <Dropdown3 options={genders} />
              </span>
            </th>
            <th className="col-span-2 flex min-w-[40%] items-center  border-b border-[#686868] px-4 text-left">
              <span className="w-full">
                <Dropdown3 options={cciCampuses} />
              </span>
            </th>
            <th className="col-span-2 flex min-w-[40%] items-center border-b border-[#686868] pl-4 text-left">
              <span className="w-full">
                <Dropdown3 options={serviceUnits} />
              </span>
            </th>
          </tr>
          {members?.map((item, index) => (
            <tr
              key={index}
              className="flex cursor-pointer text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-10"
              onClick={() => router.push(`${router.pathname}/${item.id}`)}
            >
              <td className="min-w-[20%] border-b border-[#68686880] py-4 text-left">
                {index + 1}
              </td>

              <td className="col-span-3 min-w-[60%] border-b border-[#68686880] p-4 text-left">
                {item.first_name} {item.last_name}
              </td>

              <td className="col-span-2 min-w-[40%] border-b border-[#68686880] p-4 text-left capitalize">
                {item.gender}
              </td>

              <td className="col-span-2 min-w-[40%] border-b border-[#68686880] p-4 text-left font-[500] text-cci-green">
                {item.map_group_name ? item.map_group_name : 'Ikeja'}
              </td>

              <td className="col-span-2 min-w-[40%] border-b border-[#68686880] py-4 pl-4 text-left font-[500] text-cci-green">
                {item.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 md:my-6 md:flex md:items-center md:justify-between">
        <span className="mb-4 block text-sm text-cci-black md:mb-0 md:text-base">
          Showing {itemOffset >= 10 ? itemOffset + 1 : 1} to{' '}
          {itemOffset + members.length} of {data?.data?.data?.length} entries
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
    </section>
  );
};

export default MembersTable;
