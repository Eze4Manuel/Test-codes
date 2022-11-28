import CCIProfile from '@/components/shared/CCIProfile';
import { useToggle } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import profileTabs from '@/layouts/TabViewLayout/shared/ProfileTabs';
import Meta from '@/templates/Meta';

const CCIInfo = () => {
  const [isEditting, toggleIsEditting] = useToggle(false);

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
        tabs={profileTabs}
        showActionButton
        onActionButtonClicked={toggleIsEditting}
        actionButtonTitle={isEditting ? 'Cancel' : 'Edit Info'}
      >
        <CCIProfile isEditting={isEditting} />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default CCIInfo;
