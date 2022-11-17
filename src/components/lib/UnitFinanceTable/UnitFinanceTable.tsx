import { useRouter } from 'next/router';
import type { FC } from 'react';

import Pagination from '../Pagination';
import Table from '../Table';
import TableBody from '../Table/TableBody';
import TableCell from '../Table/TableCell';
import TableHeader from '../Table/TableHeader';
import TableRow from '../Table/TableRow';
import Text from '../Text';
import type UnitFinanceTableProps from './UnitFinanceTable.props';

const UnitFinanceTable: FC<UnitFinanceTableProps> = ({
  tableData,
  limit,
  page,
  pages,
}) => {
  const router = useRouter();

  if (tableData?.histories.length === 0) {
    return (
      <div className="my-20 flex items-center justify-center">
        <p className="text-2xl font-bold">No Finance history for the month</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3 overflow-x-hidden">
      <Table>
        <TableHeader
          items={['SN', 'Date', 'Cash Inflow', 'Expenditure', 'Action']}
        />
        <TableBody>
          {tableData?.histories.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + (page - 1) * limit + 1}</TableCell>
              <TableCell>
                <Text variant="caption">
                  {`${item.week}, ${item?.created_at.toLocaleDateString()}`}
                </Text>
              </TableCell>
              <TableCell>
                <Text variant="caption">
                  NGN{item?.inflow?.toLocaleString()}
                </Text>
              </TableCell>
              <TableCell>
                <Text variant="caption">
                  NGN{item?.expenditure?.toLocaleString()}
                </Text>
              </TableCell>
              <TableCell url={`${router.pathname}/${item?.id}`}>
                <Text variant="caption" className="text-cci-green">
                  View Details
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-wrap items-center justify-between gap-5 border-none">
        <Text variant="caption">
          Showing {(page - 1) * limit + 1} to {limit * page} of{' '}
          {tableData?.histories.length} entries
        </Text>
        <Pagination count={pages} page={page} setPage={() => {}} />
      </div>
    </div>
  );
};

export default UnitFinanceTable;
