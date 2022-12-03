import CCIGeneralMembership from '@/components/shared/GeneralMembership';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';
import Meta from '@/templates/Meta';

const GeneralMembership = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="General Membership Database | Protocol Unit Lead"
          description="Information about the general membership of the protocol unit."
        />
      }
    >
      <TabViewLayout tabs={protocolUnitTabs}>
        <CCIGeneralMembership />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default GeneralMembership;
