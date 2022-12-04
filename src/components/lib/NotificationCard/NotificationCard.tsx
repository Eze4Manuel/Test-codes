import { Icon } from '@iconify/react';
import type { FC } from 'react';

import type NotificationCardType from './NotificationCard.props';

const NotificationCard: FC<NotificationCardType> = ({ data }) => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 text-white">
      {data.map((item, index) => (
        <div
          className="relative h-[171px] rounded-[10px] bg-black text-center"
          key={index}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-5">
            <div className="relative mx-auto h-8 w-8 rounded-full bg-white">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22px] font-[700] text-black">
                {item.unit.charAt(0)}
              </span>
            </div>
            <p className="mt-4">{item.title}</p>
            <div className="relative mx-auto mt-6 h-6 w-6 rounded-full bg-white">
              <Icon
                icon="ic:baseline-keyboard-arrow-right"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-black"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
