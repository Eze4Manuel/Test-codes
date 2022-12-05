import UnitBudgetReport from '@/components/shared/UnitBudgetReport/UnitBudgetReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const BudgetRequest = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Report | Follow-up Unit Lead"
          description="Budget report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <UnitBudgetReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetRequest;
