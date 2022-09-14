import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const MeetingReports = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Follow-up Unit Lead"
          description="Meeting report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}></TabViewLayout>
    </AuthLayout>
  );
};

export default MeetingReports;
