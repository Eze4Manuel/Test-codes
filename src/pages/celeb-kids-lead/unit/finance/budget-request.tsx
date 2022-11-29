import UnitBudgetRequest from '@/components/shared/UnitBudgetRequest';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const BudgetRequest = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Request | Follow-up Unit Lead"
          description="Budget Request for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <UnitBudgetRequest />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetRequest;
