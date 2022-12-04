import UnitBudgetRequest from '@/components/shared/UnitBudgetRequest';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const BudgetRequest = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Request | Sanctuary Keepers Unit Lead"
          description="Budget Request for the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitBudgetRequest />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetRequest;
