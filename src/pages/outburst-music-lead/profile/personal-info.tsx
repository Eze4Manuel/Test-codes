import ProfileDetails from '@/components/auth/ProfileDetails';
import PersonalProfile from '@/components/shared/PersonalProfile';
import { useToggle } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import profileTabs from '@/layouts/TabViewLayout/shared/ProfileTabs';
import Meta from '@/templates/Meta';

const PersonalInfo = () => {
  const [isEditting, toggleIsEditting] = useToggle(false);

  return (
    <AuthLayout
      meta={
        <Meta
          title="Personal Info | Outburst Music Group Unit Lead"
          description="Your personal information as an outburst music group lead in CCI."
        />
      }
    >
      <div className="grid w-full gap-10">
        <ProfileDetails
          membershipClass
          serviceUnit="Outburst Music Group (Choir)"
        />

        <TabViewLayout
          tabs={profileTabs}
          showActionButton
          onActionButtonClicked={toggleIsEditting}
          actionButtonTitle={isEditting ? 'Cancel' : 'Edit Info'}
        >
          <PersonalProfile isEditting={isEditting} />
        </TabViewLayout>
      </div>
    </AuthLayout>
  );
};

export default PersonalInfo;
