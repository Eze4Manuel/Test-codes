import MemberLayout from '@/components/lib/MemberLayout';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const Member = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Member | Protocol Lead"
          description="Unit Member of the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <MemberLayout />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Member;
