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
    <div className="grid h-[238.97px] grid-cols-3 gap-3 md:flex md:overflow-x-scroll lg:grid lg:w-full lg:grid-cols-3 lg:gap-6 lg:overflow-auto">
      {allData.map((data, index) => (
        <div key={index} className={styles.card_container}>
          <div className="h-[12px] rounded-t-[24px] bg-cci-black"></div>
          <div className="absolute top-[50%] -translate-y-1/2">
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
                  <span className="ml-1 flex items-center text-cci-green2 md:ml-2">
                    {RisingArrow}
                  </span>
                ) : (
                  <span className="ml-1 flex items-center text-cci-red md:ml-2">
                    {FallingArrow}
                  </span>
                )}
              </span>
            </div>
            <p className="mx-auto p-4 pb-0 text-center text-[12px] font-[500] text-cci-grey-dim md:px-8">
              Higher than Total Attendance on {data.prevDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceCardExtra;
