import UnitBudgetRequest from '@/components/shared/UnitBudgetRequest';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';
import Meta from '@/templates/Meta';

const BudgetRequest = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Request | Outburst Music Group Unit Lead"
          description="Budget Request for the outburst music group."
        />
      }
    >
      <TabViewLayout tabs={outburstUnitTabs}>
        <UnitBudgetRequest />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetRequest;
