import UnitMeetingViewReport from '@/components/shared/UnitMeetingReports/UnitMeetingViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Protocol Unit Lead"
          description="Meeting reportData for the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <UnitMeetingViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
