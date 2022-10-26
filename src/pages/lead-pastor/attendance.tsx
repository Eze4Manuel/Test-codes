import AttendanceCardExtra from '@/components/lib/AttendanceCard/Extra/AttendanceCardExtra';
import AttendanceCard from '@/components/lib/AttendanceCard/Main';
import BarChart from '@/components/lib/BarChart/BarChart';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import Checkbox from '@/components/lib/Checkbox';
import Dropdown2 from '@/components/lib/Dropdown2';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';
import AuthLayout from '@/layouts/AuthLayout';
import { Pointer } from '@/public/assets/icons/pointer';
import Meta from '@/templates/Meta';
import { cciCampuses } from '@/utils/constants';

const Attendance = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Attendance | Lead Pastor"
          description="Financial information for the follow up unit."
        />
      }
    >
      <section>
        <div className="flex justify-between">
          <Dropdown2 options={cciCampuses} />

          <div className="flex gap-[4em]">
            <Checkbox theme="darkBlack" label="Sunday Service" />
            <Checkbox theme="darkBlack" label="MDWK Service" />
            <Checkbox theme="darkBlack" label="Other" />
          </div>
        </div>

        <section>
          <div className="my-[2em] flex justify-between">
            <AttendanceCard />
            <AttendanceCardExtra />
          </div>
        </section>
      </section>

      <section className="rounded-[14.389px] border-[2.15835px] border-[#68686826] p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-[700] text-cci-black">
            Total Attendance
          </h3>
          <ToggleTwoStates list={['Weekly', 'Monthly']} />
        </div>
        <ChartLabel />
        <div className="relative p-6">
          <BarChart />
          <div className="absolute left-[96%] top-[87%] h-[45.05px] w-[45px] rounded-full border-[2.00218px] border-[#68686880] bg-white">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {Pointer}
            </span>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Attendance;
