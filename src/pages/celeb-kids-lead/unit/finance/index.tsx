import UnitFinance from '@/components/shared/UnitFinance';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const Finance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Finance | Celeb Kids Unit Lead"
          description="Financial information for the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <UnitFinance />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Finance;
