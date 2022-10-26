import { Icon } from '@iconify/react';

import Checkbox from '@/components/lib/Checkbox';
import Dropdown from '@/components/lib/Dropdown';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import { useToggle } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  const [checked, toggleChecked] = useToggle(false);

  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Follow-up Unit Lead"
          description="Unit Member of the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
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
                <Input labelText="Surname" disabled />
              </div>

              <div className="w-full flex-1">
                <Input labelText="Other names" disabled />
              </div>
            </div>

            <Dropdown
              label="Gender"
              disabled
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
            <Input labelText="Phone Number" disabled />
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
            <Input
              labelText="No. of children (if any)"
              type="number"
              disabled
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
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
