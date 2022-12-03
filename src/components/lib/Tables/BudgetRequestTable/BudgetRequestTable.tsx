import type { FC } from 'react';

import type { BudgetRequestTableType } from './BudgetRequestTable.props';

const BudgetRequestTable: FC<BudgetRequestTableType> = ({ tableData }) => {
  const totalCost = tableData.reduce((accumulator, item) => {
    accumulator += item.cost;
    return accumulator;
  }, 0);

  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className="block overflow-x-scroll md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-8">
            <th className="min-w-[20%] border-b border-r border-[#686868] pr-6 text-left">
              S/N
            </th>
            <th className="col-span-2 min-w-[50%] border-b border-r border-[#686868]  px-4 text-left">
              Item Name
            </th>
            <th className="col-span-3 min-w-[50%] border-b border-r border-[#686868]  px-4 text-left">
              Cost of Item
            </th>
            <th className="col-span-2 min-w-[50%] border-b border-[#686868] pl-4 text-left">
              Proof of Payment
            </th>
          </tr>
        </thead>
        <tbody className="block w-full">
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="flex cursor-pointer text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-8"
            >
              <td className="min-w-[20%] whitespace-nowrap  border-b border-r border-[#68686880] py-4 text-left">
                {index + 1}
              </td>

              <td className="col-span-2 min-w-[50%]  whitespace-nowrap border-b border-r border-[#68686880] p-4 text-left">
                {item.name}
              </td>

              <td className="col-span-3 min-w-[50%]  whitespace-nowrap border-b border-r border-[#68686880] p-4 text-left capitalize">
                NGN{item.cost}
              </td>
              <td className="col-span-2 min-w-[50%] whitespace-nowrap border-b border-[#68686880] py-4 pl-4 text-left font-[500]">
                {item.POP}
              </td>
            </tr>
          ))}
          <tr className="flex cursor-pointer text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-8">
            <td className="min-w-[20%] whitespace-nowrap  border-b border-r border-[#68686880] py-4 text-left"></td>

            <td className="col-span-2 min-w-[50%]  whitespace-nowrap border-b border-r border-[#68686880] p-4 text-left text-base font-[700] text-cci-black">
              TOTAL
            </td>

            <td className="col-span-3 min-w-[50%]  whitespace-nowrap border-b border-r border-[#68686880] p-4 text-left text-base font-[700] capitalize text-cci-black">
              {new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'NGN',
              }).format(totalCost)}
            </td>
            <td className=" col-span-2 min-w-[50%] whitespace-nowrap border-b border-[#68686880] py-4 pl-4 text-left font-[500]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetRequestTable;
