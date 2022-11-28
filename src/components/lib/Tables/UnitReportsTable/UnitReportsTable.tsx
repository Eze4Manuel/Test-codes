/* eslint-disable no-nested-ternary */
import moment from 'moment';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import htmlToText from '@/utils/htmlToText';

import type UnitReportsTableProps from './UnitReportsTable.props';

const UnitReportsTable: FC<UnitReportsTableProps> = ({
  tableData,
  itemOffset,
}) => {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    id: string
  ) => {
    const { textContent } = e.target as Node;
    const formatTextContext = textContent?.toLowerCase().split(' ').join('-');
    router.push(`${router.pathname}/${formatTextContext}/${id}`);
  };

  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className="block overflow-x-scroll md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-7">
            <th className="min-w-[20%] border-b border-[#686868] pr-6 text-left">
              S/N
            </th>
            <th className="col-span-2 min-w-[40%] border-b border-[#686868] px-4 text-left">
              Date
            </th>
            <th className="col-span-3 min-w-[50%] border-b border-[#686868]  px-4 text-left">
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
              className="flex text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-7"
            >
              <td className="min-w-[20%] border-b border-[#68686880] py-4 text-left">
                {itemOffset >= 10 ? itemOffset + index + 1 : index + 1}
              </td>
              <td className="col-span-2 min-w-[40%] border-b border-[#68686880] p-4 text-left">
                {`${moment(new Date(item.start)).format('MMM DD')} - ${moment(
                  new Date(item.end)
                ).format('MMM DD, YYYY')}`}
              </td>
              <td className="col-span-3 min-w-[50%] border-b border-[#68686880] p-4 text-left capitalize">
                {item.report.charCodeAt(0) === 32
                  ? 'Empty'
                  : htmlToText(item.report)!.length >= 24
                  ? htmlToText(item.report)!.substring(0, 24).concat('...')
                  : htmlToText(item.report)!}
              </td>
              <td
                className="min-w-[30%] cursor-pointer border-b border-[#68686880] py-4 text-left font-[500] text-cci-green"
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.report.charCodeAt(0) === 32
                  ? 'Write Report'
                  : 'View Report'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitReportsTable;

// {`${moment(startDate).format('MMM DD')} - ${moment(
//   endDate
// ).format('MMM DD, YYYY')}`}
