import UnitMember from '@/components/shared/UnitMember';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Follow-up Unit Lead"
          description="Unit Member of the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <UnitMember />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
