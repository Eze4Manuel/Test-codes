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
          title="Personal Info | Member"
          description="Your personal information as a member of CCI."
        />
      }
    >
      <TabViewLayout
        tabs={profileTabs}
        showActionButton
        onActionButtonClicked={toggleIsEditting}
        actionButtonTitle={isEditting ? 'Cancel' : 'Edit Info'}
      >
        <PersonalProfile isEditting={isEditting} />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default PersonalInfo;
