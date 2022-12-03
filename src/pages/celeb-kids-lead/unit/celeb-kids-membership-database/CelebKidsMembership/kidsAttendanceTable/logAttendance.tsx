import { Icon } from '@iconify/react';
import router from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/lib/Button';
import Checkbox from '@/components/lib/Checkbox';
import { logAttendanceData } from '@/data/celebKidsMembers';

import KidsAttendanceTable from './kidsAttendanceTableData';

const LogAttendance = () => {
  const [searchValue] = useState('');

  return (
    <div>
      <div className="w-full justify-between md:flex">
        <div className="mb-8 mt-4 flex w-full items-center  gap-1 md:mb-0 ">
          <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
            <Checkbox />
          </span>
          <span className="mr-4 whitespace-nowrap font-[700] text-cci-black">
            Sunday Service
          </span>
          <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
            <Checkbox />
          </span>
          <span className="mr-4 whitespace-nowrap font-[700] text-cci-black">
            MidWeek Service
          </span>
          <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
            <Checkbox />
          </span>
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Other
          </span>
        </div>
      </div>
      <div className="mt-6 w-full md:w-[30%]">
        <Button
          variant="outline"
          size="medium"
          className="flex w-full items-center gap-2 text-center"
          onClick={() => router.push(`${router.pathname}/create-new-celeb-kid`)}
        >
          <Icon icon="akar-icons:plus" className="text-lg" />
          Log Attendance Data
        </Button>
      </div>
      <KidsAttendanceTable
        kidsAttendanceTableData={logAttendanceData}
        page={1}
        limit={10}
        pages={1}
        searchValue={searchValue}
      />
    </div>
  );
};

export default LogAttendance;
