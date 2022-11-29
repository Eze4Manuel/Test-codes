import UnitWriteReport from '@/components/shared/UnitReports/UnitWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Outburst Music Group Unit Lead"
          description="Unit report for the outburst music group."
        />
      }
    >
      <TabViewLayout tabs={outburstUnitTabs}>
        <UnitWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
