import Button from '@/components/lib/Button';
import Checkbox from '@/components/lib/Checkbox';
import { logIndvidualAttendanceData } from '@/data/celebKidsMembers';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import celebKidsUnitTabs from '@/layouts/TabViewLayout/celebKidsLead/celebKidsUnitTabs';
import Meta from '@/templates/Meta';

import KidsIndividualLogAttendance from './KidsIndividualLogAttedance';

const IndividualAttendanceProfile = () => {
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
        <div className="mb-4 flex w-full items-center  gap-1 md:mb-8 ">
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Date of Service:
          </span>
          <span className="whitespace-nowrap font-[700] text-cci-black">
            <Button size="small" variant="outline">
              22-05-2022
            </Button>
          </span>
        </div>
        <div className="mb-8 mt-4 flex w-full items-center  gap-1 md:mb-10 ">
          <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
            <Checkbox checked={true} />
          </span>
          <span className="mr-4 whitespace-nowrap font-[700] text-cci-black">
            Sunday Service
          </span>
        </div>
        <KidsIndividualLogAttendance
          kidsIndividualLogAttendanceData={logIndvidualAttendanceData}
          page={1}
          pages={1}
          limit={10}
          searchValue={''}
        />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default IndividualAttendanceProfile;
