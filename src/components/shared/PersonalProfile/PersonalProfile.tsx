import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import CheckOutRequest from '@/components/lib/CheckOutRequest';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import FullPageLoader from '@/components/lib/FullPageLoader';
import Input from '@/components/lib/Input';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchUser, updateUser } from '@/services/member';
import { setUserData } from '@/store/slices/userSlice';
import queryKeys from '@/utils/api/queryKeys';
import { genders, maritalStatuses } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';
import { validatePersonalInfoInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

import type PersonalProfileProps from './PersonalProfile.props';

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

const PersonalProfile: FC<PersonalProfileProps> = ({ isEditting }) => {
  const dispatch = useAppDispatch();
  const [member, setMember] = useState(memberState);
  const [errors, setErrors] = useState(memberState);
  const [checkoutRequestModal, setCheckoutRequestModal] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const [maritalStatus, setMaritalStatus] =
    useState<SingleValue<Option>>(option);
  const [gender, setGender] = useState<SingleValue<Option>>(option);

  const query = {
    search_param_type: 'EMAIL',
    search_param: user?.email_address,
  };

  const { isFetching: infoLoading } = useQuery(
    [queryKeys.getMemberInfo, user?.email_address],
    () => fetchUser(query),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setMember({
            first_name: data?.first_name,
            last_name: data?.last_name,
            email_address: data?.email_address,
            phone_number: data?.phone_number,
            home_address: data?.home_address,
            marital_status: data?.marital_status,
            dob: data?.dob,
            gender: data?.gender,
          });
          setGender(
            genders.find((item) => item.value === data?.gender) || option
          );
          setMaritalStatus(
            maritalStatuses.find(
              (item) => item.value === data?.marital_status
            ) || option
          );
        }
      },
      enabled: !!user?.email_address,
    }
  );

  const { mutate, isLoading } = useMutation(updateUser, {
    onSuccess(response) {
      const data = processResponse(response);

      if (data) {
        toast.success('Profile updated successfully!');

        const userData = {
          id: data?.id,
          ccid: data?.ccid,
          email_address: data?.email_address,
          first_name: data?.first_name,
          last_name: data?.last_name,
          gender: data?.gender,
          profile_picture: data?.profile_picture,
          role: data?.role,
          unit: data?.unit,
        };

        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(setUserData(userData));
      }
    },
  });

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

    if (valid) {
      mutate({
        id: user?.id as string,
        data: member,
      });
    } else {
      setErrors(validateErrors);
    }
  };

  return (
    <>
      <div className="grid w-full gap-10">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row">
          <div className="w-full flex-1">
            <Input
              labelText="First Name"
              name="first_name"
              value={member.first_name}
              onChange={handleChange}
              disabled={!isEditting}
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
              disabled={!isEditting}
              error={!isEmpty(errors.last_name)}
              helperText={errors.last_name}
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
          error={!isEmpty(errors.gender)}
          helperText={errors.gender}
        />

        <Input
          labelText="Date of Birth"
          name="dob"
          type="date"
          value={member.dob}
          onChange={handleChange}
          disabled={!isEditting}
          error={!isEmpty(errors.dob)}
          helperText={errors.dob}
        />
        <Input
          labelText="Phone Number"
          name="phone_number"
          value={member.phone_number}
          onChange={handleChange}
          disabled={!isEditting}
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
          disabled={!isEditting}
          error={!isEmpty(errors.home_address)}
          helperText={errors.home_address}
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
          error={!isEmpty(errors.marital_status)}
          helperText={errors.marital_status}
        />
        <Input
          labelText="No. of children (if any)"
          type="number"
          value="0"
          disabled={!isEditting}
        />

        {isEditting ? (
          <div>
            <Button size="large" onClick={handleSubmit} loading={isLoading}>
              Save Changes
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {infoLoading && <FullPageLoader />}
      {checkoutRequestModal && (
        <CheckOutRequest setCheckoutRequestModal={setCheckoutRequestModal} />
      )}
    </>
  );
};

export default PersonalProfile;
