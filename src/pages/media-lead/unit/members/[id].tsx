import UnitMember from '@/components/shared/UnitMember';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Media Unit Lead"
          description="Unit Member of the media unit."
        />
      }
    >
      <TabViewLayout tabs={mediaUnitTabs}>
        <UnitMember />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
