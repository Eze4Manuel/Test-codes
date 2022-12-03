import UnitViewReport from '@/components/shared/UnitReports/UnitViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Protocol Unit Lead"
          description="Unit reportData for the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <UnitViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
