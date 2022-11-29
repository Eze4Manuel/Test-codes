import UnitMeetingWriteReport from '@/components/shared/UnitMeetingReports/UnitMeetingWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import ambienceUnitTabs from '@/layouts/TabViewLayout/ambienceLead/ambienceUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
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
        <UnitMeetingWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
