import UnitMembers from '@/components/shared/UnitMembers';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import sanctuaryKeepersUnitTabs from '@/layouts/TabViewLayout/sanctuaryKeepersLead/sanctuaryKeepersUnitTabs';
import Meta from '@/templates/Meta';

const Members = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Members | Sanctuary Keepers Unit Lead"
          description="Unit Members of the sanctuary keepers unit."
        />
      }
    >
      <TabViewLayout tabs={sanctuaryKeepersUnitTabs}>
        <UnitMembers />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Members;
