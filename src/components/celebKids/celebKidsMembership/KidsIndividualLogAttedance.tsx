import type { FC } from 'react';

import Pagination from '@/components/lib/Pagination';
import Table from '@/components/lib/Table';
import TableBody from '@/components/lib/Table/TableBody';
import TableCell from '@/components/lib/Table/TableCell';
import TableHeader from '@/components/lib/Table/TableHeader';
import TableRow from '@/components/lib/Table/TableRow';
import Text from '@/components/lib/Text';

import type kidsIndividualLogAttendanceProps from './kidsIndividualLogAttendance.props';

const KidsIndividualLogAttendance: FC<kidsIndividualLogAttendanceProps> = ({
  kidsIndividualLogAttendanceData,
  page,
  limit,
  pages,
  searchValue,
}) => {
  const filteredKidAttendanceTable = kidsIndividualLogAttendanceData.filter(
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
            'Kids Full Name',
            'Celeb Kid Number',
            'Check-In Time',
            'Checked-Out Time',
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
                  <Text variant="caption">{celeb_kid?.kids_full_name}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.celeb_kid_number}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.check_in_time}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.check_out_time}</Text>
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
      <div>
        <Text variant="body2">Total Kids Attendance: 7</Text>
      </div>
    </div>
  );
};

export default KidsIndividualLogAttendance;
