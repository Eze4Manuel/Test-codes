import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import AttendanceCardExtra from '@/components/lib/AttendanceCard/Extra/AttendanceCardExtra';
import AttendanceCard from '@/components/lib/AttendanceCard/Main/index';
import BarChart from '@/components/lib/BarChart/BarChart';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import Checkbox from '@/components/lib/Checkbox';
import Dropdown2 from '@/components/lib/Dropdown2';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';
import { attendanceData } from '@/data/barChartData';
import { attendanceLabel } from '@/data/chartLabelData';
// import { useAppSelector } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import { getAllAttendance } from '@/services/attendance';
import type { AttendancePayload } from '@/services/attendance/payload';
import Meta from '@/templates/Meta';
import queryKeys from '@/utils/api/queryKeys';
import { cciCampuses } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

const Attendance = () => {
  // const { user } = useAppSelector((state) => state.user);
  const [activeID, setActiveID] = useState(0);
  const [allAttendanceData, setAllAttendanceData] =
    useState<AttendancePayload>();

  const { isLoading } = useQuery(
    [queryKeys.getAllAttendance],
    () => getAllAttendance(),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          setAllAttendanceData(data);
        }
      },
      // enabled: !!user?.ccid,
    }
  );

  return (
    <AuthLayout
      meta={
        <Meta
          title="Attendance | Lead Pastor"
          description="Member Attendance for the lead pastor."
        />
      }
    >
      <section>
        <div className="lg:flex lg:justify-between">
          <Dropdown2 options={cciCampuses} />

          <div className="my-4 flex flex-col gap-3 sm:flex-row md:gap-[4em] lg:my-0">
            <Checkbox theme="darkBlack" label="Sunday Service" />
            <Checkbox theme="darkBlack" label="MDWK Service" />
            <Checkbox theme="darkBlack" label="Other" />
          </div>
        </div>

        <section>
          <div className="my-[2em] flex flex-col md:gap-3 lg:gap-6 xl:flex-row">
            <AttendanceCard loading={isLoading} data={allAttendanceData} />
            <AttendanceCardExtra />
          </div>
        </section>
      </section>

      <section className="rounded-[14.389px] border-[2.15835px] border-[#68686826] p-4 md:py-6 md:px-8 lg:p-12">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-[700] text-cci-black">
            Total Attendance
          </h3>
          <ToggleTwoStates
            setActiveID={setActiveID}
            activeID={activeID}
            list={['Weekly', 'Monthly']}
          />
        </div>
        <ChartLabel data={attendanceLabel} />
        <div className="relative">
          <BarChart data={attendanceData} />
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
