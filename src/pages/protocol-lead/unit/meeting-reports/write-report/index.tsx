import UnitMeetingWriteReport from '@/components/shared/UnitMeetingReports/UnitMeetingWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Protocol Unit Lead"
          description="Meeting report for the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <UnitMeetingWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
