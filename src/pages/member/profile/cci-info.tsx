import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import Input from '@/components/lib/Input';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import memberProfileTabs from '@/layouts/TabViewLayout/member/memberProfileTabs';
import Meta from '@/templates/Meta';

const CCIProfile = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="CCI Info | Member"
          description="Information about the CCI campus you are currently in."
        />
      }
    >
      <TabViewLayout tabs={memberProfileTabs} showActionButton>
        <div className="grid w-full gap-10">
          <Input labelText="CCI ID Number" />
          <Dropdown
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
            onChange={() => {}}
          />
          <Dropdown
            label="MAP Group"
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
            label="Service Unit"
            options={[
              {
                label: 'Follow-up',
                value: 'follow-up',
              },
            ]}
            onChange={() => {}}
          />

          <div>
            <Button size="large">Save Changes</Button>
          </div>
        </div>
      </TabViewLayout>
    </AuthLayout>
  );
};

export default CCIProfile;
