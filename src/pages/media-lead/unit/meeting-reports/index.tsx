import UnitMeetingReports from '@/components/shared/UnitMeetingReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';
import Meta from '@/templates/Meta';

const MeetingReports = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Media Unit Lead"
          description="Meeting report for the media unit."
        />
      }
    >
      <TabViewLayout tabs={mediaUnitTabs}>
        <UnitMeetingReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MeetingReports;
