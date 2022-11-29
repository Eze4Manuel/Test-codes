import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import Button from '@/components/lib/Button';
import Checkbox from '@/components/lib/Checkbox';
import Dropdown from '@/components/lib/Dropdown';
import FullPageLoader from '@/components/lib/FullPageLoader';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import { useAppSelector, useToggle } from '@/hooks';
import { fetchUser } from '@/services/member';
import { removeMemberFromUnit } from '@/services/unit';
import type Member from '@/types/Member.type';
import queryKeys from '@/utils/api/queryKeys';
import {
  CCICampuses,
  genders,
  mapGroups,
  maritalStatuses,
  membershipClasses,
  units,
} from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

const UnitMember = () => {
  const { user } = useAppSelector((state) => state.user);
  const [checked, toggleChecked] = useToggle(false);
  const [member, setMember] = useState<Member | null>(null);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isFetching } = useQuery(
    [queryKeys.getUnitMember, router.query?.id],
    () =>
      fetchUser({
        search_param: router.query?.id as string,
        search_param_type: 'USER_ID',
      }),
    {
      enabled: !!router.query?.id,
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setMember(data);
        }
      },
    }
  );

  const { mutate, isLoading } = useMutation(removeMemberFromUnit, {
    onSuccess(response) {
      const data = processResponse(response);

      if (data) {
        queryClient.invalidateQueries(queryKeys.getUnitMembers);
        router.back();
      }
    },
  });

  const handleRemove = () => {
    if (user?.unit && member?.id) {
      mutate({
        unit: user.unit,
        user_id: member.id,
      });
    }
  };

  return (
    <>
      <div className="grid w-full gap-20">
        <div className="grid w-full gap-10">
          <div className="flex items-center gap-5">
            <div className="rounded-md bg-primary-main/10 py-3 px-5">
              <Text className="font-josefinSans font-bold">
                Member Personal Info
              </Text>
            </div>

            {member?.id && (
              <div className="hidden md:block">
                <Checkbox
                  theme="wine"
                  label="Remove from unit"
                  checked={checked}
                  onChange={toggleChecked}
                />
              </div>
            )}

            <div className="md:hidden">
              <Icon icon="ph:dots-three-circle-light" className="text-2xl" />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-10 md:flex-row">
            <div className="w-full flex-1">
              <Input labelText="Surname" disabled value={member?.last_name} />
            </div>

            <div className="w-full flex-1">
              <Input
                labelText="Other names"
                disabled
                value={member?.first_name}
              />
            </div>
          </div>

          <Dropdown
            label="Gender"
            disabled
            options={genders}
            value={genders.find((gender) => gender.value === member?.gender)}
          />

          <Input
            labelText="Date of Birth"
            type="date"
            disabled
            value={member?.dob}
          />
          <Input
            labelText="Phone Number"
            disabled
            value={member?.phone_number}
          />
          <Input
            labelText="E-mail address"
            type="email"
            disabled
            value={member?.email_address}
          />
          <Input
            labelText="House address"
            disabled
            value={member?.home_address}
          />
          <Dropdown
            disabled
            label="Marital Status"
            options={maritalStatuses}
            value={maritalStatuses.find(
              (status) => status.value === member?.marital_status
            )}
          />
          <Input
            labelText="No. of children (if any)"
            type="number"
            disabled
            value={'0'}
          />
        </div>

        <div className="grid w-full gap-10">
          <div className="flex items-center gap-5">
            <div className="rounded-md bg-primary-main/10 py-3 px-5">
              <Text className="font-josefinSans font-bold">
                Member CCI Info
              </Text>
            </div>
          </div>

          <Input labelText="CCI ID Number" disabled value={member?.ccid} />
          <Dropdown
            disabled
            label="CCI Campus"
            options={CCICampuses}
            value={CCICampuses.find(
              // TODO: Remove hardcoded value when the backend adds campuses to the member payload
              (campus) => campus.value === ''
            )}
          />
          <Dropdown
            label="MAP Group"
            disabled
            options={mapGroups}
            value={mapGroups.find(
              // TODO: Remove hardcoded value when the backend adds map group to the member payload
              (group) => group.value === ''
            )}
            onChange={() => {}}
          />

          <Dropdown
            label="Membership Class"
            disabled
            options={membershipClasses}
            value={
              member?.membership_class
                ? { value: 'yes', label: 'Yes' }
                : { value: 'no', label: 'No' }
            }
          />

          <Dropdown
            disabled
            label="Service Unit"
            options={units}
            value={units.find((unit) => unit.value === member?.unit)}
          />
        </div>
      </div>

      {checked && (
        <Modal onClose={toggleChecked}>
          <div className="grid w-full justify-items-center gap-3 p-5 text-center md:p-10">
            <Heading>Remove from Unit</Heading>
            <Text>
              Are you sure you want to remove {member?.first_name}{' '}
              {member?.last_name} from your unit.
            </Text>
            <Button
              size="medium"
              className="mt-10 w-full"
              onClick={handleRemove}
              loading={isLoading}
            >
              Remove Member
            </Button>
          </div>
        </Modal>
      )}

      {isFetching && <FullPageLoader />}
    </>
  );
};

export default UnitMember;
