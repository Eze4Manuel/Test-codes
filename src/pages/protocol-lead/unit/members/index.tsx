import UnitMembers from '@/components/shared/UnitMembers';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const Members = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Members | Protocol Unit Lead"
          description="Unit Members of the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <UnitMembers />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Members;
