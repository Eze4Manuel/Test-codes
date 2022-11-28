import UnitWriteReport from '@/components/shared/UnitReports/UnitWriteReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const WriteReport = () => {
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
        <UnitWriteReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
