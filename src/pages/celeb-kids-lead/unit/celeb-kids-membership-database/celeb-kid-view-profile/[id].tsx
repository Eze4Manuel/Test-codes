import CelebKidIndividualProfile from '@/components/celebKids/celebKidsMembership/CelebKidEditProfile';
import Button from '@/components/lib/Button';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitMemberShipTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsMembershipTab';
import Meta from '@/templates/Meta';

const IndividualProfile = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Celeb-Kids Unit Lead"
          description="Unit Member of the celeb kids unit."
        />
      }
    >
      <TabViewLayout
        tabs={celebKidsUnitMemberShipTabs}
        rightComponent={
          <Button size="small" variant="outline">
            Edit Profile
          </Button>
        }
      >
        <CelebKidIndividualProfile />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default IndividualProfile;
