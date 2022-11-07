import type { FC } from 'react';

import type UnitFinanceTableProps from './UnitFinanceTable.props';

const UnitFinanceTable: FC<UnitFinanceTableProps> = ({ tableData }) => {
  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className="block overflow-x-scroll md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-6">
            <th className="min-w-[20%] border-b border-[#686868] pr-6 text-left">
              S/N
            </th>
            <th className="col-span-2 min-w-[40%] border-b border-[#686868] pr-6 text-left">
              Date
            </th>
            <th className="min-w-[30%] border-b  border-[#686868]  pr-6 text-left">
              Cash inflow
            </th>
            <th className="min-w-[30%] border-b  border-[#686868] pr-6 text-left">
              Expenditure
            </th>
            <th className="min-w-[30%] border-b  border-[#686868] pr-6 text-left">
              Action
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
                {item.index}
              </td>
              <td className="col-span-2 min-w-[40%] border-b border-[#68686880] py-4 text-left ">
                {item.date}
              </td>
              <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left capitalize">
                {item.cashInflow}
              </td>
              <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left">
                {item.expenditure}
              </td>
              <td className="min-w-[30%] cursor-pointer border-b border-[#68686880] py-4 text-left text-cci-green">
                {item.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitFinanceTable;
