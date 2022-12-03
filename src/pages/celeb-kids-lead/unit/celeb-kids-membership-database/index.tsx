import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import CelebKidsMembership from '@/pages/celeb-kids-lead/unit/celeb-kids-membership-database/CelebKidsMembership';
import Meta from '@/templates/Meta';

const GeneralMembership = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="General Membership Database | Celeb Kids Unit Lead"
          description="Information about the general membership of the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={celebKidsUnitTabs}>
        <CelebKidsMembership />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default GeneralMembership;
