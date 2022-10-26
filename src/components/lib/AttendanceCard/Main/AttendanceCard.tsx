import type { FC } from 'react';

import DonutChart from '../../DonutChart/DonutChart';

const members = [
  {
    sex: 'Men',
    color: 'bg-cci-grey',
    size: '3.5k',
  },
  {
    sex: 'Women',
    color: 'bg-cci-green',
    size: '4k',
  },
  {
    sex: 'Children',
    color: 'bg-cci-red',
    size: '1k',
  },
];

const AttendanceCard: FC = () => {
  return (
    <div>
      <div className="flex items-center gap-[1em]">
        <DonutChart />
        <div>
          <h6 className="text-[12px] font-[600] text-cci-grey-dim">
            Total Attendance <span className="block">(October 30)</span>
          </h6>
          <h3 className="text-[2.5em] font-[600]">8,500</h3>
          <ul>
            {members.map((member, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={`mr-3 h-3 w-3 rounded-full ${member.color}`}
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
