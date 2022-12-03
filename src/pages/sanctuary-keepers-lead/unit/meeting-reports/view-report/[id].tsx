import UnitMeetingViewReport from '@/components/shared/UnitMeetingReports/UnitMeetingViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Sanctuary Keepers Unit Lead"
          description="Meeting reportData for the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitMeetingViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
