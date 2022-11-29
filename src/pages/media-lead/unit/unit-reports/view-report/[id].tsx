import UnitViewReport from '@/components/shared/UnitReports/UnitViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';
import Meta from '@/templates/Meta';

const ViewReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Media Unit Lead"
          description="Unit reportData for the media unit."
        />
      }
    >
      <TabViewLayout tabs={mediaUnitTabs}>
        <UnitViewReport />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReport;
