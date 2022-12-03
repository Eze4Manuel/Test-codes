import UnitWriteReport from '@/components/shared/UnitReports/UnitWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
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
        <UnitWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
