import UnitWriteReport from '@/components/shared/UnitReports/UnitWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Follow-up Unit Lead"
          description="Unit report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <UnitWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
