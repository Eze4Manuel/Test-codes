import UnitFinance from '@/components/shared/UnitFinance';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import ambienceUnitTabs from '@/layouts/TabViewLayout/ambienceLead/ambienceUnitTabs';
import Meta from '@/templates/Meta';

const Finance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Finance | Ambience Unit Lead"
          description="Financial information for the ambience unit."
        />
      }
    >
      <TabViewLayout tabs={ambienceUnitTabs}>
        <UnitFinance />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Finance;
