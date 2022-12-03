import UnitMeetingViewReport from '@/components/shared/UnitMeetingReports/UnitMeetingViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import ambienceUnitTabs from '@/layouts/TabViewLayout/ambienceLead/ambienceUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Ambience Unit Lead"
          description="Meeting reportData for the ambience unit."
        />
      }
    >
      <TabViewLayout tabs={ambienceUnitTabs}>
        <UnitMeetingViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
