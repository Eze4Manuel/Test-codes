import UnitViewReport from '@/components/shared/UnitReports/UnitViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Sanctuary Keepers Unit Lead"
          description="Unit reportData for the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
