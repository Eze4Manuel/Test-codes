import UnitBudgetRequest from '@/components/shared/UnitBudgetRequest';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';
import Meta from '@/templates/Meta';

const BudgetRequest = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Request | Media Unit Lead"
          description="Budget Request for the media unit."
        />
      }
    >
      <TabViewLayout tabs={mediaUnitTabs}>
        <UnitBudgetRequest />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetRequest;
