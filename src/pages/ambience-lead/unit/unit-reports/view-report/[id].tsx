import UnitViewReport from '@/components/shared/UnitReports/UnitViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import ambienceUnitTabs from '@/layouts/TabViewLayout/ambienceLead/ambienceUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Ambience Unit Lead"
          description="Unit reportData for the ambience unit."
        />
      }
    >
      <TabViewLayout tabs={ambienceUnitTabs}>
        <UnitViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
