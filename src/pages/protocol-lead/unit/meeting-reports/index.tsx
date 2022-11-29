import UnitMeetingReports from '@/components/shared/UnitMeetingReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const MeetingReports = () => {
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
        <UnitMeetingReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MeetingReports;
