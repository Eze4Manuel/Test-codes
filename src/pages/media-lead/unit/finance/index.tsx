import UnitFinance from '@/components/shared/UnitFinance';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';
import Meta from '@/templates/Meta';

const Finance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Finance | Media Unit Lead"
          description="Financial information for the media unit."
        />
      }
    >
      <TabViewLayout tabs={mediaUnitTabs}>
        <UnitFinance />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Finance;
