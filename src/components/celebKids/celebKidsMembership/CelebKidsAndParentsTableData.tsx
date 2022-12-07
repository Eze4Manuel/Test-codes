import { useRouter } from 'next/router';
import type { FC } from 'react';

import Pagination from '@/components/lib/Pagination';
import Table from '@/components/lib/Table';
import TableBody from '@/components/lib/Table/TableBody';
import TableCell from '@/components/lib/Table/TableCell';
import TableHeader from '@/components/lib/Table/TableHeader';
import TableRow from '@/components/lib/Table/TableRow';
import Text from '@/components/lib/Text';

import type CelebKidsAndParentsTableProps from './CelebKidsAndParentsTable.props';

const CelebKidsAndParentsTableData: FC<CelebKidsAndParentsTableProps> = ({
  celebKidsAndParentsTableData,
  page,
  limit,
  pages,
  searchValue,
}) => {
  const router = useRouter();
  //   const dispatch = useAppDispatch();

  const filteredCelebKidAndParentTable = celebKidsAndParentsTableData.filter(
    (value) => {
      if (searchValue === '') {
        return value;
      }
      if (
        value.first_name
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
            'Full Name',
            'Gender',
            'Group',
            'Parents Name',
            'Action',
          ]}
        />
        <TableBody>
          {filteredCelebKidAndParentTable.map(
            (
              celeb_kid,
              index // when there is a search value
            ) => (
              <TableRow key={index}>
                <TableCell>{index + (page - 1) * limit + 1}</TableCell>
                <TableCell>
                  <Text variant="caption">
                    {celeb_kid?.first_name} {celeb_kid?.last_name}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.gender}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.group}</Text>
                </TableCell>
                <TableCell>
                  <Text variant="caption">{celeb_kid?.parent_name}</Text>
                </TableCell>
                <TableCell
                  onClick={() => {}}
                  url={`${router.pathname}/celeb-kid-view-profile/${celeb_kid?.id}`}
                >
                  <Text variant="caption" className="text-cci-green">
                    View Profile
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
          {filteredCelebKidAndParentTable.length} entries
        </Text>
        <Pagination count={pages} page={page} setPage={() => {}} />
      </div>
    </div>
  );
};

export default CelebKidsAndParentsTableData;
