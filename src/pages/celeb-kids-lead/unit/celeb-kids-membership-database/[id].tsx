import MemberLayout from '@/components/lib/MemberLayout';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Celeb-Kids Unit Lead"
          description="Unit Member of the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <MemberLayout />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
