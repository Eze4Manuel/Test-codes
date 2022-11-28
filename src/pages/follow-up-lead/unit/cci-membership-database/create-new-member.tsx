import type { FormEvent } from 'react';
import { useState } from 'react';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import Input from '@/components/lib/Input';
import UploadExel from '@/components/lib/UploadExel';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';
import {
  createNewMemberTab,
  genders,
  maritalStatuses,
} from '@/utils/constants';
import { validatePersonalInfoInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

const CreateNewMember = () => {
  const [active, setActive] = useState(0);

  const memberState = {
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    home_address: '',
    marital_status: '',
    dob: '',
    gender: '',
  };

  const option = {
    label: '',
    value: '',
  };

  const [member, setMember] = useState(memberState);
  const [errors, setErrors] = useState(memberState);
  const [maritalStatus, setMaritalStatus] =
    useState<SingleValue<Option>>(option);
  const [gender, setGender] = useState<SingleValue<Option>>(option);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setMember({
      ...member,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(memberState);
    const { errors: validateErrors, valid } =
      validatePersonalInfoInputs(member);

    if (!valid) {
      setErrors(validateErrors);
    }
  };

  return (
    <AuthLayout
      meta={
        <Meta
          title="General Membership Database | Follow-up Unit Lead"
          description="Information about the general membership of the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <div className=" items-center justify-center gap-6 md:flex">
          {createNewMemberTab.map((item, index) => (
            <div
              key={index}
              className={
                index === active
                  ? 'border-grey mb-2 flex w-full cursor-pointer items-center  gap-2 rounded-xl border-2 bg-primary-main/10 p-3 text-center hover:border-primary-main/10 hover:bg-primary-main/10 md:w-auto'
                  : 'border-grey mb-2 flex w-full cursor-pointer items-center gap-2 rounded-xl border-2 p-3 text-center hover:bg-primary-main/10 md:w-auto'
              }
              onClick={() => setActive(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <div>
          {active === 0 ? (
            <div>
              <div className="mt-6 grid w-full gap-10">
                <div className="flex w-full flex-col items-center gap-10 md:flex-row">
                  <div className="w-full flex-1">
                    <Input
                      labelText="First Name"
                      name="first_name"
                      value={member.first_name}
                      onChange={handleChange}
                      error={!isEmpty(errors.first_name)}
                      helperText={errors.first_name}
                    />
                  </div>

                  <div className="w-full flex-1">
                    <Input
                      labelText="Last Name"
                      name="last_name"
                      value={member.last_name}
                      onChange={handleChange}
                      error={!isEmpty(errors.last_name)}
                      helperText={errors.last_name}
                    />
                  </div>
                </div>

                <Dropdown
                  label="Gender"
                  value={gender}
                  options={genders}
                  onChange={(value) => {
                    setGender(value);
                    setMember({
                      ...member,
                      gender: value?.value || '',
                    });
                  }}
                  error={!isEmpty(errors.gender)}
                  helperText={errors.gender}
                />

                <Input
                  labelText="Date of Birth"
                  name="dob"
                  type="date"
                  value={member.dob}
                  onChange={handleChange}
                  error={!isEmpty(errors.dob)}
                  helperText={errors.dob}
                />
                <Input
                  labelText="Phone Number"
                  name="phone_number"
                  value={member.phone_number}
                  onChange={handleChange}
                  error={!isEmpty(errors.phone_number)}
                  helperText={errors.phone_number}
                />
                <Input
                  labelText="E-mail address"
                  name="email_address"
                  type="email"
                  value={member.email_address}
                  disabled={true}
                  onChange={handleChange}
                  error={!isEmpty(errors.email_address)}
                  helperText={errors.email_address}
                />
                <Input
                  labelText="House address"
                  name="home_address"
                  value={member.home_address}
                  onChange={handleChange}
                  error={!isEmpty(errors.home_address)}
                  helperText={errors.home_address}
                />
                <Dropdown
                  label="Marital Status"
                  value={maritalStatus}
                  options={maritalStatuses}
                  onChange={(value) => {
                    setMaritalStatus(value);
                    setMember({
                      ...member,
                      marital_status: value?.value || '',
                    });
                  }}
                  error={!isEmpty(errors.marital_status)}
                  helperText={errors.marital_status}
                />
                <Input
                  labelText="No. of children (if any)"
                  type="number"
                  value="0"
                />

                <div className="items-center justify-center gap-4  md:flex lg:flex-col xl:flex-row ">
                  <Button
                    size="large"
                    onClick={handleSubmit}
                    // loading={isLoading}
                    className="mb-2 flex w-full items-center gap-2 md:w-auto  "
                  >
                    Send Profile Link via SMS
                  </Button>
                  <Button
                    size="large"
                    onClick={handleSubmit}
                    // loading={isLoading}
                    className="mb-2 flex w-full items-center gap-2 md:w-auto  "
                  >
                    Send Profile Link via E-Mail
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <UploadExel />
          )}
        </div>
      </TabViewLayout>
    </AuthLayout>
  );
};

export default CreateNewMember;
