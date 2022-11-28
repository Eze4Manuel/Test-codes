import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

import { useToggle } from '@/hooks';
import type Member from '@/types/Member.type';

import Checkbox from '../Checkbox';
import Dropdown from '../Dropdown';
import Input from '../Input';
import Text from '../Text';

const MemberLayout = () => {
  const [checked, toggleChecked] = useToggle(false);
  const [member, setMember] = useState<Member>();

  useEffect(() => {
    const data = JSON.parse(`${localStorage.getItem('member')}`);
    if (data) {
      setMember(data);
    }
  }, []);

  return (
    <div>
      <div className="grid w-full gap-20">
        <div className="grid w-full gap-10">
          <div className="flex items-center gap-5">
            <div className="rounded-md bg-primary-main/10 py-3 px-5">
              <Text className="font-josefinSans font-bold">
                Member Personal Info
              </Text>
            </div>

            <div className="hidden md:block">
              <Checkbox
                theme="wine"
                label="Remove from unit"
                checked={checked}
                onChange={toggleChecked}
              />
            </div>

            <div className="md:hidden">
              <Icon icon="ph:dots-three-circle-light" className="text-2xl" />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-10 md:flex-row">
            <div className="w-full flex-1">
              <Input value={member?.first_name} labelText="Surname" disabled />
            </div>

            <div className="w-full flex-1">
              <Input
                value={member?.last_name}
                labelText="Other names"
                disabled
              />
            </div>
          </div>

          <Dropdown
            label="Gender"
            disabled
            value={member?.gender}
            options={[
              {
                label: 'Male',
                value: 'm',
              },
              {
                label: 'Female',
                value: 'f',
              },
            ]}
          />

          <Input labelText="Date of Birth" type="date" disabled />
          <Input
            labelText="Phone Number"
            value={member?.phone_number}
            disabled
          />
          <Input labelText="E-mail address" type="email" disabled />
          <Input labelText="House address" disabled />
          <Dropdown
            disabled
            label="Marital Status"
            options={[
              {
                label: 'Married',
                value: 'married',
              },
              {
                label: 'Single',
                value: 'single',
              },
            ]}
          />
          <Input labelText="No. of children (if any)" type="number" disabled />
        </div>

        <div className="grid w-full gap-10">
          <div className="flex items-center gap-5">
            <div className="rounded-md bg-primary-main/10 py-3 px-5">
              <Text className="font-josefinSans font-bold">
                Member CCI Info
              </Text>
            </div>
          </div>

          <Input labelText="CCI ID Number" disabled />
          <Dropdown
            disabled
            label="CCI Campus"
            options={[
              {
                label: 'Ikeja, Lagos',
                value: 'ikeja',
              },
              {
                label: 'Victoria Island, Lagos',
                value: 'vi',
              },
            ]}
          />
          <Dropdown
            label="MAP Group"
            disabled
            options={[
              {
                label: 'Ikeja, Lagos',
                value: 'ikeja',
              },
              {
                label: 'Victoria Island, Lagos',
                value: 'vi',
              },
            ]}
            onChange={() => {}}
          />

          <Dropdown
            label="Membership Class"
            disabled
            options={[
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ]}
            onChange={() => {}}
          />

          <Dropdown
            disabled
            label="Service Unit"
            options={[
              {
                label: 'Follow-up',
                value: 'follow-up',
              },
            ]}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberLayout;
