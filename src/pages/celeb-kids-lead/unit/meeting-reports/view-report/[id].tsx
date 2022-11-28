import UnitMeetingViewReport from '@/components/shared/UnitMeetingReports/UnitMeetingViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Celeb Kids Lead"
          description="Meeting reportData for the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <UnitMeetingViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
