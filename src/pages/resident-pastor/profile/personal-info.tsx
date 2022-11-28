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
          title="Personal Info | Resident Pastor"
          description="Your personal information as a resident pastor in CCI."
        />
      }
    >
      <div className="grid w-full gap-10">
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
