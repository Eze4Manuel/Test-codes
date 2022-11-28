import UnitMeetingReports from '@/components/shared/UnitMeetingReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const MeetingReports = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Celeb Kids Unit Lead"
          description="Meeting report for the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <UnitMeetingReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MeetingReports;
