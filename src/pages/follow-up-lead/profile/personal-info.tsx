import ProfileDetails from '@/components/auth/ProfileDetails';
import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import Input from '@/components/lib/Input';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadProfileTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadProfileTabs';
import Meta from '@/templates/Meta';

const PersonalInfo = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Personal Info | Follow-up Unit Lead"
          description="Your personal information as a follow-up unit lead in CCI."
        />
      }
    >
      <div className="grid w-full gap-10">
        <ProfileDetails membershipClass serviceUnit="Follow-Up" />

        <TabViewLayout tabs={followUpLeadProfileTabs} showActionButton>
          <div className="grid w-full gap-10">
            <div className="flex w-full flex-col items-center gap-10 md:flex-row">
              <div className="w-full flex-1">
                <Input labelText="Surname" />
              </div>

              <div className="w-full flex-1">
                <Input labelText="Other names" />
              </div>
            </div>

            <Dropdown
              label="Gender"
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
              onChange={() => {}}
            />

            <Input labelText="Date of Birth" type="date" />
            <Input labelText="Phone Number" />
            <Input labelText="E-mail address" type="email" />
            <Input labelText="House address" />
            <Dropdown
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
              onChange={() => {}}
            />
            <Input labelText="No. of children (if any)" type="number" />

            <div>
              <Button size="large">Save Changes</Button>
            </div>
          </div>
        </TabViewLayout>
      </div>
    </AuthLayout>
  );
};

export default PersonalInfo;