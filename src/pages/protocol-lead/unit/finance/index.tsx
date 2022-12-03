import UnitFinance from '@/components/shared/UnitFinance';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const Finance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Finance | Protocol Unit Lead"
          description="Financial information for the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <UnitFinance />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Finance;
