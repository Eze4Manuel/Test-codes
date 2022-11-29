import UnitReports from '@/components/shared/UnitReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const UnitReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Sanctuary Keepers Unit Lead"
          description="Unit report for the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
