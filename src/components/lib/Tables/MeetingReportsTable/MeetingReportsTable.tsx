import moment from 'moment';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import htmlToText from '@/utils/htmlToText';

import type MeetingReportsProps from './MeetingReports.props';

const MeetingReportsTable: FC<MeetingReportsProps> = ({
  tableData,
  itemOffset,
}) => {
  const router = useRouter();

  console.log(tableData);

  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className="block overflow-x-scroll md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] text-sm font-[500] md:grid md:grid-cols-8">
            <th className="min-w-[20%] border-b border-[#686868] pr-6 text-left">
              S/N
            </th>
            <th className="col-span-2 min-w-[30%] border-b border-[#686868]  px-4 text-left">
              Date
            </th>
            <th className="col-span-4 min-w-[70%] border-b border-[#686868]  px-4 text-left">
              Meeting Report
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
              className="flex cursor-pointer text-sm font-[500] text-cci-grey-dim md:grid md:grid-cols-8"
              onClick={() =>
                router.push(`${router.pathname}/view-report/${item.id}`)
              }
            >
              <td className="min-w-[20%] border-b border-[#68686880] py-4 text-left">
                {itemOffset >= 10 ? itemOffset + index + 1 : index + 1}
              </td>

              <td className="col-span-2 min-w-[30%] border-b border-[#68686880] p-4 text-left">
                {moment(item.date).format('MMM DD, YYYY')}
              </td>

              <td className="col-span-4 min-w-[70%] border-b border-[#68686880] p-4 text-left capitalize">
                {htmlToText(item.report)!.length >= 24
                  ? htmlToText(item.report)!.substring(0, 24).concat('...')
                  : htmlToText(item.report)!}
              </td>
              <td className="min-w-[30%] border-b border-[#68686880] py-4 text-left font-[500] text-cci-green">
                View Report
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingReportsTable;
