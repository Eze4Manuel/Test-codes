import { Icon } from '@iconify/react';

import AttendanceCardExtra from '@/components/lib/AttendanceCard/Extra/AttendanceCardExtra';
import AttendanceCard from '@/components/lib/AttendanceCard/Main';
import BarChart from '@/components/lib/BarChart/BarChart';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import Checkbox from '@/components/lib/Checkbox';
import Dropdown2 from '@/components/lib/Dropdown2';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';
import AuthLayout from '@/layouts/AuthLayout';
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
        <div className="lg:flex lg:justify-between">
          <Dropdown2 options={cciCampuses} />

          <div className="my-4 flex gap-[4em] lg:my-0">
            <Checkbox theme="darkBlack" label="Sunday Service" />
            <Checkbox theme="darkBlack" label="MDWK Service" />
            <Checkbox theme="darkBlack" label="Other" />
          </div>
        </div>

        <section>
          <div className="my-[2em] md:flex md:items-center md:gap-3 lg:gap-6">
            <AttendanceCard />
            <AttendanceCardExtra />
          </div>
        </section>
      </section>

      <section className="rounded-[14.389px] border-[2.15835px] border-[#68686826] p-4 md:py-6 md:px-8 lg:p-12">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-[700] text-cci-black">
            Total Attendance
          </h3>
          <ToggleTwoStates list={['Weekly', 'Monthly']} />
        </div>
        <ChartLabel />
        <div className="relative ">
          <BarChart />
          <Icon
            icon="ion:chevron-forward-circle-outline"
            className="font-400 absolute left-[98%] top-[80%] cursor-pointer bg-white text-2xl md:top-[87%] md:text-3xl lg:top-[91%]"
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Attendance;
