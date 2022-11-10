import type { FC } from 'react';

import DonutChart from '../../DonutChart/DonutChart';
import type { AttendanceCardProps } from '../types';
import styles from './AttendanceCard.module.scss';

const AttendanceCard: FC<AttendanceCardProps> = ({ data }) => {
  const members = [
    {
      sex: 'Men',
      color: 'bg-cci-grey',
      size: data?.Men,
    },
    {
      sex: 'Women',
      color: 'bg-cci-green',
      size: data?.Women,
    },
    {
      sex: 'Children',
      color: 'bg-cci-red',
      size: data?.Kids,
    },
  ];
  return (
    <div className={styles.base}>
      <div className="flex items-center justify-between p-4 md:w-max md:gap-3 md:px-8 lg:gap-6 lg:px-12">
        <div className="max-w-[204px]">
          <DonutChart donutData={data} />
        </div>

        <div>
          <h6 className="text-[12px] font-[600] text-cci-grey-dim">
            Total Attendance <span className="block">(October 30)</span>
          </h6>
          <h3 className="text-[34px] font-[600]">
            {data?.Total_Attendance.toLocaleString()}
          </h3>
          <ul className="mt-4">
            {members.map((member, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={`mr-2 h-3 w-3 rounded-full ${member.color}`}
                ></span>
                <span className="mr-2">{member.size}</span>
                <span>{member.sex}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
