import UnitFinance from '@/components/shared/UnitFinance';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';
import Meta from '@/templates/Meta';

const Finance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Finance | Outburst Music Group Unit Lead"
          description="Financial information for the outburst music group."
        />
      }
    >
      <TabViewLayout tabs={outburstUnitTabs}>
        <UnitFinance />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Finance;
