import { FallingArrow } from '@/public/assets/icons/fallingArrow';
import { RisingArrow } from '@/public/assets/icons/risingArrow';

import styles from './AttendanceCardExtra.module.scss';

const allData = [
  {
    date: 'Oct. 16',
    attendance: '36%',
    prevDate: 'Oct. 9',
    status: 'rise',
  },
  {
    date: 'Oct. 23',
    attendance: '36%',
    prevDate: 'Oct. 16',
    status: 'rise',
  },
  {
    date: 'Oct. 30',
    attendance: '24%',
    prevDate: 'Oct. 23',
    status: 'fall',
  },
];

const AttendanceCardExtra = () => {
  return (
    <div className="grid w-full grid-cols-3 md:gap-3 lg:w-[60%] lg:gap-6">
      {allData.map((data, index) => (
        <div key={index} className={styles.card_container}>
          <div className="h-[12px] rounded-t-[24px] bg-cci-black"></div>
          <div className={styles.date_container}>{data.date}</div>
          <div>
            <span className="mb-[0.5em] flex justify-center text-[28px]">
              <span
                className={`${
                  data.status === 'rise' ? 'text-cci-green2' : 'text-cci-red'
                }`}
              >
                {data.attendance}
              </span>

              {data.status === 'rise' ? (
                <span className="ml-2 flex items-center text-cci-green2">
                  {RisingArrow}
                </span>
              ) : (
                <span className="ml-2 flex items-center text-cci-red">
                  {FallingArrow}
                </span>
              )}
            </span>
          </div>
          <p className="mx-auto text-center text-[14px] font-[500] text-cci-grey-dim md:w-[70%] lg:w-[50%]">
            Higher than Total Attendance on {data.prevDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AttendanceCardExtra;
