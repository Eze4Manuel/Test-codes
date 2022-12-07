import { useRouter } from 'next/router';
import type { FC } from 'react';

import Pagination from '@/components/lib/Pagination';
import Table from '@/components/lib/Table';
import TableBody from '@/components/lib/Table/TableBody';
import TableCell from '@/components/lib/Table/TableCell';
import TableHeader from '@/components/lib/Table/TableHeader';
import TableRow from '@/components/lib/Table/TableRow';
import Text from '@/components/lib/Text';

import type KidsAttendanceTableProps from './kidsAttendanceTable.props';

const KidsAttendanceTableData: FC<KidsAttendanceTableProps> = ({
  kidsAttendanceTableData,
  page,
  limit,
  pages,
  searchValue,
}) => {
  const router = useRouter();

  const filteredKidAttendanceTable = kidsAttendanceTableData.filter(
    (value: any) => {
      if (searchValue === '') {
        return value;
      }
      if (
        value.date_of_service
          .toLocaleLowerCase()
          .includes(searchValue?.toLocaleLowerCase()!)
      ) {
        return value;
      }
      return false;
    }
  );

  return (
    <div className="flex w-full flex-col gap-3 overflow-x-hidden">
      <Table>
        <TableHeader
          items={[
            'SN',
            'Date of Service',
            'Total Attendance',
            'Total Kids Checked In',
            'Total Kids Checked Out',
            'Action',
          ]}
        />
        <TableBody>
          {filteredKidAttendanceTable.map(
            (
              celeb_kid,
              index // when there is a search value
            ) => (
              <TableRow key={index}>
                <TableCell>{index + (page - 1) * limit + 1}</TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.date_of_service}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.total_attendance}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">
                    {celeb_kid?.total_kids_checked_in}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">
                    {celeb_kid?.total_kids_checked_out}
                  </Text>
                </TableCell>
                <TableCell
                  onClick={() => {}}
                  url={`${router.pathname}/kids-attendance-table/${celeb_kid?.id}`}
                >
                  <Text variant="caption" className="text-cci-green">
                    View Details
                  </Text>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      <div className="flex flex-wrap items-center justify-between gap-5">
        <Text variant="caption">
          Showing {(page - 1) * limit + 1} to {limit * page} of{' '}
          {filteredKidAttendanceTable.length} entries
        </Text>
        <Pagination count={pages} page={page} setPage={() => {}} />
      </div>
    </div>
  );
};

export default KidsAttendanceTableData;
