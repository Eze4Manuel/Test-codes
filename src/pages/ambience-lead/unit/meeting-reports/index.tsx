import UnitMeetingReports from '@/components/shared/UnitMeetingReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import ambienceUnitTabs from '@/layouts/TabViewLayout/ambienceLead/ambienceUnitTabs';
import Meta from '@/templates/Meta';

const MeetingReports = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Ambience Unit Lead"
          description="Meeting report for the ambience unit."
        />
      }
    >
      <TabViewLayout tabs={ambienceUnitTabs}>
        <UnitMeetingReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MeetingReports;
