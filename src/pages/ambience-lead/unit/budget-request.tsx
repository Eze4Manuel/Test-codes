import UnitBudgetRequest from '@/components/shared/UnitBudgetRequest';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import ambienceUnitTabs from '@/layouts/TabViewLayout/ambienceLead/ambienceUnitTabs';
import Meta from '@/templates/Meta';

const BudgetRequest = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Request | Ambience Unit Lead"
          description="Budget Request for the ambience unit."
        />
      }
    >
      <TabViewLayout tabs={ambienceUnitTabs}>
        <UnitBudgetRequest />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetRequest;
