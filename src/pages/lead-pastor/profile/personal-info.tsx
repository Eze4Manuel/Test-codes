import type { FormEvent } from 'react';
import { useState } from 'react';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import Input from '@/components/lib/Input';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import profileTabs from '@/layouts/TabViewLayout/shared/ProfileTabs';
import Meta from '@/templates/Meta';
import { genders, maritalStatuses } from '@/utils/constants';

/// Remove this hardcoded data and utilize the PersonalProfile Component
/// once the lead Pastor's account has been properly set by the backend.
/// Refer to the: src/pages/member/profile/personal-info

const memberState = {
  first_name: 'Emmanuel',
  last_name: 'Iren',
  email_address: 'emmanuelIren@gmail.com',
  phone_number: '08032222222',
  home_address: '31B Kola Amodu Crescent, Magodo Phase 2, Lagos',
  marital_status: '',
  dob: '19/12/1989',
  gender: 'Male',
};

const option = {
  label: 'Married',
  value: 'Married',
};

const PersonalInfo = () => {
  const [member, setMember] = useState(memberState);
  const [isEditting, setIsEditting] = useState(false);
  const [maritalStatus, setMaritalStatus] =
    useState<SingleValue<Option>>(option);
  const [gender, setGender] = useState<SingleValue<Option>>(option);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setMember({
      ...member,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const toggleIsEditting = () => {
    setIsEditting(!isEditting);
  };

  return (
    <AuthLayout
      meta={
        <Meta
          title="Personal Info | Lead Pastor"
          description="Your personal information as a lead pastor of CCI."
        />
      }
    >
      <TabViewLayout
        tabs={profileTabs}
        showActionButton
        onActionButtonClicked={toggleIsEditting}
        actionButtonTitle={isEditting ? 'Cancel' : 'Edit Info'}
      >
        <div className="grid w-full gap-10">
          <div className="flex w-full flex-col items-center gap-10 md:flex-row">
            <div className="w-full flex-1">
              <Input
                labelText="First Name"
                name="first_name"
                value={member.first_name}
                onChange={handleChange}
                disabled={!isEditting}
              />
            </div>

            <div className="w-full flex-1">
              <Input
                labelText="Last Name"
                name="last_name"
                value={member.last_name}
                onChange={handleChange}
                disabled={!isEditting}
              />
            </div>
          </div>

          <Dropdown
            label="Gender"
            value={gender}
            disabled={!isEditting}
            options={genders}
            onChange={(value) => {
              setGender(value);
              setMember({
                ...member,
                gender: value?.value || '',
              });
            }}
          />

          <Input
            labelText="Date of Birth"
            name="dob"
            type="date"
            value={member.dob}
            onChange={handleChange}
            disabled={!isEditting}
          />
          <Input
            labelText="Phone Number"
            name="phone_number"
            value={member.phone_number}
            onChange={handleChange}
            disabled={!isEditting}
          />
          <Input
            labelText="E-mail address"
            name="email_address"
            type="email"
            value={member.email_address}
            disabled={true}
            onChange={handleChange}
          />
          <Input
            labelText="House address"
            name="home_address"
            value={member.home_address}
            onChange={handleChange}
            disabled={!isEditting}
          />
          <Dropdown
            label="Marital Status"
            value={maritalStatus}
            disabled={!isEditting}
            options={maritalStatuses}
            onChange={(value) => {
              setMaritalStatus(value);
              setMember({
                ...member,
                marital_status: value?.value || '',
              });
            }}
          />
          <Input
            labelText="No. of children (if any)"
            type="number"
            value="3"
            disabled={!isEditting}
          />

          {isEditting ? (
            <div>
              <Button size="large">Save Changes</Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </TabViewLayout>
    </AuthLayout>
  );
};

export default PersonalInfo;
