import type { FormEvent } from 'react';
import { useState } from 'react';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import Input from '@/components/lib/Input';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import leadPastorProfileTabs from '@/layouts/TabViewLayout/leadPastor/leadPastorProfileTabs';
import Meta from '@/templates/Meta';
import {
  CCICampuses,
  mapGroups,
  membershipClasses,
  serviceUnits,
} from '@/utils/constants';

const CCIState = {
  ccid: '',
  membership_class: '',
};

const CCIProfile = () => {
  const [CCIInfo, setCCIInfo] = useState(CCIState);
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

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setCCIInfo({
      ...CCIInfo,
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
          title="CCI Info | Lead Pastor"
          description="Information about the CCI campus you are currently in."
        />
      }
    >
      <TabViewLayout
        tabs={leadPastorProfileTabs}
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

export default CCIProfile;
