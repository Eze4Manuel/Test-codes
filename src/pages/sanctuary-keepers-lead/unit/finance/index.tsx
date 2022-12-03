import UnitFinance from '@/components/shared/UnitFinance';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const Finance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Finance | Sanctuary Keepers Unit Lead"
          description="Financial information for the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitFinance />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Finance;
