import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Button from '@/components/lib/Button';
import FullPageLoader from '@/components/lib/FullPageLoader';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import { useAppSelector, useDebounce, useToggle } from '@/hooks';
import { getUnitMembers } from '@/services/unit';
import type Member from '@/types/Member.type';
import queryKeys from '@/utils/api/queryKeys';
import { processResponse } from '@/utils/response/processResponse';

import MembersTable from '../MembersTable';
import AddMemberModal from './AddMemberModal';

const UnitMembers = () => {
  const { user } = useAppSelector((state) => state.user);
  const [modalIsOpen, toggleModalIsOpen] = useToggle(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);
  const [members, setMembers] = useState<Member[]>([]);
  const [page, setPage] = useState(1);
  const [requestMeta] = useState({
    current_page: 1,
    items_per_page: 20,
    total_items: 0,
    total_pages: 0,
    has_previous_page: false,
    has_next_page: false,
  });

  const { isFetching } = useQuery(
    [queryKeys.getUnitMembers, page, user?.unit],
    () =>
      getUnitMembers({
        unit: user?.unit,
        page,
      }),
    {
      enabled: !!user?.unit,
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setMembers(data || []);
        }
      },
    }
  );

  return (
    <>
      <div className="grid w-full gap-10">
        <div className="flex w-full flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Text variant="caption" className="font-bold">
              Show
            </Text>
            <div className="max-w-[80px]">
              <Input variant="contained" type="number" />
            </div>
            <Text variant="caption" className="font-bold">
              entries
            </Text>
          </div>

          <div className="flex items-center gap-3">
            <Text variant="caption" className="whitespace-nowrap font-bold">
              Search Member:
            </Text>
            <Input
              variant="contained"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </div>
        </div>

        <div>
          <Button
            variant="outline"
            size="medium"
            className="flex items-center gap-2"
            onClick={toggleModalIsOpen}
          >
            <Icon icon="akar-icons:plus" className="text-lg" />
            Add New Member
          </Button>
        </div>

        <MembersTable
          members={members}
          page={page}
          setPage={setPage}
          limit={requestMeta.items_per_page}
          pages={requestMeta.total_pages}
          searchValue={String(debouncedSearch)}
        />
      </div>

      <AddMemberModal isOpen={modalIsOpen} onClose={toggleModalIsOpen} />

      {isFetching && <FullPageLoader />}
    </>
  );
};

export default UnitMembers;
