import type { FormEvent } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import { createMemberAccount } from '@/services/auth';
import Meta from '@/templates/Meta';
import { genders, maritalStatuses } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';
import { validateRegisterInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

const initialsState = {
  first_name: '',
  last_name: '',
  dob: '',
  gender: '',
  phone_number: '',
  email_address: '',
  home_address: '',
  marital_status: '',
};

const option = {
  label: '',
  value: '',
};

export const CreateAccount = () => {
  const [payload, setPayload] = useState(initialsState);
  const [errors, setErrors] = useState(initialsState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gender, setGender] = useState<SingleValue<Option>>(option);
  const [maritalStatus, setMaritalStatus] =
    useState<SingleValue<Option>>(option);

  const { mutate, isLoading } = useMutation(createMemberAccount, {
    onSuccess(response) {
      const data = processResponse(response);

      if (data) {
        setIsSubmitted(true);
      }
    },
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(initialsState);
    const { errors: validateErrors, valid } = validateRegisterInputs(payload);

    if (valid) {
      mutate(payload);
    } else {
      setErrors(validateErrors);
    }
  };

  return (
    <OnboardingLayout
      heading="Create Member Account"
      subheading="At CCI, We are committed to knowing Christ and making him known."
      meta={
        <Meta
          title="Create A Member Account"
          description="Create A Member Account on CGOP."
        />
      }
    >
      {isSubmitted ? (
        <div className="grid w-full text-center">
          <Text>
            A link has been sent to{' '}
            <span className="font-bold text-green-500">
              {payload.email_address}
            </span>
            . Use the link to create a password for your account and proceed
            with your registration.
          </Text>
        </div>
      ) : (
        <>
          <Input
            labelText="First Name"
            name="first_name"
            value={payload.first_name}
            onChange={handleChange}
            error={!isEmpty(errors.first_name)}
            helperText={errors.first_name}
          />
          <Input
            labelText="Last Name"
            name="last_name"
            value={payload.last_name}
            onChange={handleChange}
            error={!isEmpty(errors.last_name)}
            helperText={errors.last_name}
          />
          <Input
            labelText="Date Of Birth"
            type="date"
            name="dob"
            value={payload.dob}
            onChange={handleChange}
            error={!isEmpty(errors.dob)}
            helperText={errors.dob}
          />
          <Dropdown
            label="Gender"
            value={gender}
            options={genders}
            onChange={(value) => {
              setGender(value);
              setPayload({
                ...payload,
                gender: value?.value || '',
              });
            }}
            error={!isEmpty(errors.gender)}
            helperText={errors.gender}
          />
          <Input
            labelText="Phone Number"
            name="phone_number"
            value={payload.phone_number}
            onChange={handleChange}
            error={!isEmpty(errors.phone_number)}
            helperText={errors.phone_number}
          />
          <Input
            labelText="E-mail Address"
            type="email"
            name="email_address"
            value={payload.email_address}
            onChange={handleChange}
            error={!isEmpty(errors.email_address)}
            helperText={errors.email_address}
          />

          <Input
            labelText="Home Address"
            name="home_address"
            value={payload.home_address}
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
              setPayload({
                ...payload,
                marital_status: value?.value || '',
              });
            }}
            error={!isEmpty(errors.marital_status)}
            helperText={errors.marital_status}
          />

          <div className="flex w-full flex-col items-center gap-5 text-center">
            <Button
              size="large"
              className="w-full max-w-[450px]"
              onClick={handleSubmit}
              loading={isLoading}
            >
              Create Account
            </Button>
          </div>
        </>
      )}
    </OnboardingLayout>
  );
};

export default CreateAccount;
