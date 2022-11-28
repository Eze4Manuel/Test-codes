import UnitMembers from '@/components/shared/UnitMembers';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const Members = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Members | Celeb Kids Unit Lead"
          description="Unit Members of the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <UnitMembers />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Members;
