import UnitMeetingViewReport from '@/components/shared/UnitMeetingReports/UnitMeetingViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Outburst Music Group Unit Lead"
          description="Meeting reportData for the outburst music group."
        />
      }
    >
      <TabViewLayout tabs={outburstUnitTabs}>
        <UnitMeetingViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
