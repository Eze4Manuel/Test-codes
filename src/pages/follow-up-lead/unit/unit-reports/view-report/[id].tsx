import UnitViewReport from '@/components/shared/UnitReports/UnitViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Follow-up Unit Lead"
          description="Unit reportData for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <UnitViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
