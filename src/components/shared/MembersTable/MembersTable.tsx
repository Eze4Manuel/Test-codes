import { useRouter } from 'next/router';
import type { FC } from 'react';

import Pagination from '@/components/lib/Pagination';
import Table from '@/components/lib/Table';
import TableBody from '@/components/lib/Table/TableBody';
import TableCell from '@/components/lib/Table/TableCell';
import TableHeader from '@/components/lib/Table/TableHeader';
import TableRow from '@/components/lib/Table/TableRow';
import Text from '@/components/lib/Text';

import type MembersTableProps from './MembersTable.props';

const MembersTable: FC<MembersTableProps> = ({
  members,
  page,
  limit,
  pages,
}) => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-3">
      <Table>
        <TableHeader
          items={['SN', 'Full Name', 'Gender', 'Phone Number', 'Action']}
        />
        <TableBody>
          {members.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{index + (page - 1) * limit + 1}</TableCell>
              <TableCell>
                <Text>
                  {member?.first_name} {member?.last_name}
                </Text>
              </TableCell>
              <TableCell>
                <Text>{member?.gender}</Text>
              </TableCell>
              <TableCell>
                <Text>{member?.phone_number}</Text>
              </TableCell>
              <TableCell url={`${router.pathname}/${member?.id}`}>
                <Text className="text-cci-green">View Profile</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-wrap items-center justify-between gap-5">
        <Text variant="caption">
          Showing {(page - 1) * limit + 1} to {limit * page} of {members.length}{' '}
          entries
        </Text>
        <Pagination count={pages} page={page} setPage={() => {}} />
      </div>
    </div>
  );
};

export default MembersTable;
