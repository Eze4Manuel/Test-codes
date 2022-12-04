import UnitViewReport from '@/components/shared/UnitReports/UnitViewReport';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import { meetingReports } from '@/layouts/TabViewLayout/residentPastor/reportsTab';
import Meta from '@/templates/Meta';

const ViewReports = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="View Reports | Resident Pastor"
          description="Reports for resident pastor."
        />
      }
    >
      <TabViewLayout tabs={meetingReports}>
        <UnitViewReport role="resident_pastor" />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default ViewReports;
