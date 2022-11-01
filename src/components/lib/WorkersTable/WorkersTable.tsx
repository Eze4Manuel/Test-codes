import type { FC } from 'react';

import type WorkersTableProps from './WorkersCard.props';

const WorkersTable: FC<WorkersTableProps> = ({ tableData, itemOffset }) => {
  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className="block overflow-x-scroll md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-6">
            <th className="min-w-[20%] border-b border-[#686868] pr-6 text-left">
              S/N
            </th>
            <th className="col-span-2 min-w-[40%] border-b border-[#686868] pr-6 text-left">
              Full Name
            </th>
            <th className="min-w-[30%] border-b  border-[#686868]  pr-6 text-left">
              Gender
            </th>
            <th className="min-w-[30%] border-b  border-[#686868] pr-6 text-left">
              Role
            </th>
            <th className="min-w-[30%] border-b  border-[#686868] pr-6 text-left">
              Service Unit
            </th>
          </tr>
        </thead>
        <tbody className="block w-full">
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="flex text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-6"
            >
              <td className="min-w-[20%] border-b border-[#68686880] py-4 text-left">
                {itemOffset >= 10 ? itemOffset + index + 1 : index + 1}
              </td>
              <td className="col-span-2 min-w-[40%] border-b border-[#68686880] py-4 text-left text-cci-green">
                {item.first_name.charAt(0).toUpperCase() +
                  item.first_name.slice(1)}{' '}
                {item.last_name.charAt(0).toUpperCase() +
                  item.last_name.slice(1)}
              </td>
              <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left capitalize">
                {item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
              </td>
              <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left">
                {item.role}
              </td>
              <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left">
                {item.serviceUnit || 'Not available'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkersTable;
