import UnitMember from '@/components/shared/UnitMember';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Celeb Kids Unit Lead"
          description="Unit Member of the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <UnitMember />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
