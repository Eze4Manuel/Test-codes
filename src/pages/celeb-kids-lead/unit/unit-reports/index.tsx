import UnitReports from '@/components/shared/UnitReports';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const UnitReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Celeb Kids Unit Lead"
          description="Unit report for the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <UnitReports />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
