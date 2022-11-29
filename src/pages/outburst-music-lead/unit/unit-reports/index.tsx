import UnitReports from '@/components/shared/UnitReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';
import Meta from '@/templates/Meta';

const UnitReport = () => {
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
        <UnitReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
