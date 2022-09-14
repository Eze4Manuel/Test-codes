import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const GeneralMembership = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="General Membership Database | Follow-up Unit Lead"
          description="Information about the general membership of the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}></TabViewLayout>
    </AuthLayout>
  );
};

export default GeneralMembership;
