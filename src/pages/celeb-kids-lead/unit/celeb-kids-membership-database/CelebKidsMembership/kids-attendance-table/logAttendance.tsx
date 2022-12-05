import { Icon } from '@iconify/react';
// import router from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/lib/Button';
import { logAttendanceData } from '@/data/celebKidsMembers';

import KidsAttendanceTable from './kidsAttendanceTableData';

const LogAttendance = () => {
  const [searchValue] = useState('');

  return (
    <div>
      <div className="w-full md:w-[30%]">
        <Button
          variant="outline"
          size="medium"
          className="flex w-full items-center gap-2 text-center"
          // onClick={() => router.push(`${router.pathname}/create-new-celeb-kid`)}
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
