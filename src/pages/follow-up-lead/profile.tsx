import ProfileDetails from '@/components/auth/ProfileDetails';
import TabView from '@/components/lib/TabView';
import type { Tab } from '@/components/lib/TabView/TabView.props';
import CCIInfo from '@/components/roles/follow-up-lead/CCIInfo';
import PersonalProfile from '@/components/roles/follow-up-lead/PersonalProfile';
import AuthLayout from '@/layouts/AuthLayout';
import Meta from '@/templates/Meta';

const tabs: Tab[] = [
  {
    title: 'Personal Info',
    id: 'personal-info',
    component: <PersonalProfile />,
  },
  {
    title: 'CCI Info',
    id: 'cci-info',
    component: <CCIInfo />,
  },
];

const Profile = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Profile | Service Unit Lead - Follow-up unit"
          description="Your profile as the service unit lead of the follow-up unit"
        />
      }
    >
      <div className="grid w-full gap-10">
        <ProfileDetails membershipClass serviceUnit="Follow-Up" />

        <TabView tabs={tabs} showActionButton />
      </div>
    </AuthLayout>
  );
};

export default Profile;
