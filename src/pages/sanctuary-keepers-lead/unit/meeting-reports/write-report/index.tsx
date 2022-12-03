import UnitMeetingWriteReport from '@/components/shared/UnitMeetingReports/UnitMeetingWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Sanctuary Keepers Unit Lead"
          description="Meeting report for the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitMeetingWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
