import type { FormEvent } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import FullPageLoader from '@/components/lib/FullPageLoader';
import Input from '@/components/lib/Input';
import { useAppSelector } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import memberProfileTabs from '@/layouts/TabViewLayout/member/memberProfileTabs';
import { fetchUser, updateUser } from '@/services/member';
import Meta from '@/templates/Meta';
import queryKeys from '@/utils/api/queryKeys';
import {
  CCICampuses,
  mapGroups,
  membershipClasses,
  serviceUnits,
} from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';
import { validateCCIInfoInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

const CCIState = {
  ccid: '',
  membership_class: '',
};

const CCIProfile = () => {
  const [CCIInfo, setCCIInfo] = useState(CCIState);
  const [errors, setErrors] = useState(CCIState);
  const [isEditting, setIsEditting] = useState(false);
  const [serviceUnit, setSeviceUnit] = useState<SingleValue<Option>>({
    value: '',
    label: 'None',
  });
  const [memberClass, setMemberClass] = useState<SingleValue<Option>>({
    value: '',
    label: 'Not Completed',
  });
  const [mapGrop, setMapGroup] = useState<SingleValue<Option>>({
    value: '',
    label: 'Not Selected',
  });
  const [cciCampus, setCCICampus] = useState<SingleValue<Option>>({
    value: '',
    label: 'Not Selected',
  });

  const { user } = useAppSelector((state) => state.user);

  const query = {
    search_type: 'CCID',
    search_option: user?.ccid,
  };

  const { isFetching: infoLoading } = useQuery(
    [queryKeys.getMemberCCIInfo],
    () => fetchUser(query),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setCCIInfo({
            ccid: data?.ccid,
            membership_class: data?.membership_class,
          });
        }
      },
      enabled: !!user?.ccid,
    }
  );

  const { mutate, isLoading } = useMutation(updateUser, {
    onSuccess(response) {
      const data = processResponse(response);
      if (data) {
        toast.success('Profile updated successfully!');
      }
    },
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setCCIInfo({
      ...CCIInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(CCIState);
    const { errors: validateErrors, valid } = validateCCIInfoInputs(CCIInfo);

    if (valid) {
      mutate({
        id: user?.id as string,
        data: CCIInfo,
      });
    } else {
      setErrors(validateErrors);
    }
  };

  const toggleIsEditting = () => {
    setIsEditting(!isEditting);
  };

  return (
    <AuthLayout
      meta={
        <Meta
          title="CCI Info | Member"
          description="Information about the CCI campus you are currently in."
        />
      }
    >
      <TabViewLayout
        tabs={memberProfileTabs}
        showActionButton
        onActionButtonClicked={toggleIsEditting}
        actionButtonTitle={isEditting ? 'Cancel' : 'Edit Info'}
      >
        <div className="grid w-full gap-10">
          <Input
            labelText="CCI ID Number"
            name="first_name"
            value={CCIInfo.ccid}
            onChange={handleChange}
            disabled
            error={!isEmpty(errors.ccid)}
            helperText={errors.ccid}
          />

          <Dropdown
            label="CCI Campus"
            value={cciCampus}
            disabled={!isEditting}
            options={CCICampuses}
            onChange={(value) => {
              setCCICampus(value);
              setCCIInfo({
                ...CCIInfo,
                membership_class: value?.value || '',
              });
            }}
          />

          <Dropdown
            label="Map Group"
            value={mapGrop}
            disabled={!isEditting}
            options={mapGroups}
            onChange={(value) => {
              setMapGroup(value);
              setCCIInfo({
                ...CCIInfo,
                membership_class: value?.value || '',
              });
            }}
          />

          <Dropdown
            label="Membership Class"
            value={memberClass}
            disabled
            options={membershipClasses}
            onChange={(value) => {
              setMemberClass(value);
              setCCIInfo({
                ...CCIInfo,
                membership_class: value?.value || '',
              });
            }}
            error={!isEmpty(errors.membership_class)}
            helperText={errors.membership_class}
          />

          <Dropdown
            label="Service Unit"
            value={serviceUnit}
            disabled={!isEditting}
            options={serviceUnits}
            onChange={(value) => {
              setSeviceUnit(value);
              setCCIInfo({
                ...CCIInfo,
                membership_class: value?.value || '',
              });
            }}
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
      </TabViewLayout>

      {infoLoading && <FullPageLoader />}
    </AuthLayout>
  );
};

export default CCIProfile;
