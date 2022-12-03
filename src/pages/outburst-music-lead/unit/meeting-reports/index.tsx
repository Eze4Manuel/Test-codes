import UnitMeetingReports from '@/components/shared/UnitMeetingReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';
import Meta from '@/templates/Meta';

const MeetingReports = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Outburst Music Group Unit Lead"
          description="Meeting report for the outburst music group."
        />
      }
    >
      <TabViewLayout tabs={outburstUnitTabs}>
        <UnitMeetingReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MeetingReports;
