import UnitMembers from '@/components/shared/UnitMembers';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const Members = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Members | Follow-up Unit Lead"
          description="Unit Members of the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <UnitMembers />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Members;
