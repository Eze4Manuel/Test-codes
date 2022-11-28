import UnitMeetingWriteReport from '@/components/shared/UnitMeetingReports/UnitMeetingWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
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
        <UnitMeetingWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
