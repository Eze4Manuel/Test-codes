import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

import Avatar from '@/components/lib/Avatar';
import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import { useAppSelector, useToggle } from '@/hooks';
import { fetchUser } from '@/services/member';
import { addMemberToUnit } from '@/services/unit';
import type Member from '@/types/Member.type';
import queryKeys from '@/utils/api/queryKeys';
import { processRole } from '@/utils/misc';
import { processResponse } from '@/utils/response/processResponse';
import { isEmpty } from '@/utils/validators/helpers';

import type AddMemberModalProps from './AddMemberModal.props';

const AddMemberModal: FC<AddMemberModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAppSelector((state) => state.user);
  const [showMember, toggleShowMember] = useToggle(false);
  const [member, setMember] = useState<Member | null>(null);
  const [ccid, setCcid] = useState('');
  const { urlForm } = processRole(user?.role, user?.unit);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    () => fetchUser({ search_param: ccid, search_param_type: 'CCID' }),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setMember(data);
          toggleShowMember();
        }
      },
    }
  );

  const { mutate: addMember, isLoading: addIsLoading } = useMutation(
    addMemberToUnit,
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          toast.success('Successfully added member to unit.');
          queryClient.invalidateQueries(queryKeys.getUnitMembers);
          toggleShowMember();
          onClose();
        }
      },
    }
  );

  const handleSearchMember = () => {
    if (!isEmpty(ccid)) {
      mutate();
    }
  };

  const handleAddMember = () => {
    if (user?.unit && member?.id) {
      addMember({
        unit: user?.unit,
        user_id: member?.id,
      });
    }
  };

  return isOpen ? (
    <Modal onClose={onClose}>
      <div className="grid w-full justify-items-center gap-3 p-5 text-center md:p-10">
        {showMember ? (
          <>
            <Avatar
              className="h-20 w-20"
              name={`${member?.first_name} ${member?.last_name}`}
            />
            <Text variant="subheading">
              {`${member?.first_name} ${member?.last_name}`} |{' '}
              <span className="italic">{member?.ccid}</span>
            </Text>
            <Link href={`/${urlForm}/unit/members/${member?.id}`}>
              <a>
                <Text className="text-cci-green" variant="caption">
                  View Profile
                </Text>
              </a>
            </Link>

            <Button
              size="medium"
              className="mt-5 w-full"
              loading={addIsLoading}
              onClick={handleAddMember}
            >
              Add To Unit
            </Button>
          </>
        ) : (
          <>
            <Heading>Add to Unit</Heading>
            <Text>Enter CCI ID number to find member</Text>
            <Input
              value={ccid}
              onChange={(event) => setCcid(event.currentTarget.value)}
            />
            <Button
              size="medium"
              className="mt-10 w-full"
              onClick={handleSearchMember}
              loading={isLoading}
            >
              Search
            </Button>
          </>
        )}
      </div>
    </Modal>
  ) : (
    <></>
  );
};

export default AddMemberModal;
