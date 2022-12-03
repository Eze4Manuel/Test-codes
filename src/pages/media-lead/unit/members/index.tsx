import UnitMembers from '@/components/shared/UnitMembers';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';
import Meta from '@/templates/Meta';

const Members = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Members | Media Unit Lead"
          description="Unit Members of the media unit."
        />
      }
    >
      <TabViewLayout tabs={mediaUnitTabs}>
        <UnitMembers />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Members;
