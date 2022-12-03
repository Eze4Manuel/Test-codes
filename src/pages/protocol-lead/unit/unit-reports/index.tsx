import UnitReports from '@/components/shared/UnitReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const UnitReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Protocol Unit Lead"
          description="Unit report for the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <UnitReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
