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

  return (
    <div className="flex w-full flex-col gap-3 overflow-x-hidden">
      <Table>
        <TableHeader
          items={['SN', 'Full Name', 'Gender', 'Phone Number', 'Action']}
        />
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + (page - 1) * limit + 1}</TableCell>
              <TableCell>
                <Text variant="caption">{item?.date}</Text>
              </TableCell>
              <TableCell>
                <Text variant="caption">
                  NGN{item?.cashInflow?.toLocaleString()}
                </Text>
              </TableCell>
              <TableCell>
                <Text variant="caption">
                  NGN{item?.expenditure?.toLocaleString()}
                </Text>
              </TableCell>
              <TableCell url={`${router.pathname}/${item?.index}`}>
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
          {tableData.length} entries
        </Text>
        <Pagination count={pages} page={page} setPage={() => {}} />
      </div>
    </div>
  );
};

export default UnitFinanceTable;
