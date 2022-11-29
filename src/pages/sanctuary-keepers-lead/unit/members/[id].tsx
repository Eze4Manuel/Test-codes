import UnitMember from '@/components/shared/UnitMember';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Sanctuary Keepers Unit Lead"
          description="Unit Member of the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitMember />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
