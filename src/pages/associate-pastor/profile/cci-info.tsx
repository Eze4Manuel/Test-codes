import CCIProfile from '@/components/shared/CCIProfile';
import { useToggle } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import profileTabs from '@/layouts/TabViewLayout/shared/ProfileTabs';
import Meta from '@/templates/Meta';

const CCIInof = () => {
  const [isEditting, toggleIsEditting] = useToggle(false);

  return (
    <AuthLayout
      meta={
        <Meta
          title="CCI Info | Associate Pastor"
          description="Information about the CCI campus you are currently in."
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
          <CCIProfile isEditting={isEditting} />
        </TabViewLayout>
      </div>
    </AuthLayout>
  );
};

export default CCIInof;
