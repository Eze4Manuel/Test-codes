import { Icon } from '@iconify/react';
import type { FC } from 'react';

import { allUnits } from '@/utils/constants';

import styles from './WorkersCard.module.scss';

const WorkersCard: FC = () => {
  return (
    <div className={styles.container}>
      {allUnits.map((unit, index) => (
        <div key={index} className={styles.base}>
          <div
            className="relative h-[58px] w-[62px] rounded-full px-2"
            style={{ backgroundColor: `${unit.color}` }}
          >
            <Icon
              icon="akar-icons:people-group"
              className="font-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white"
            />
          </div>
          <div>
            <p className={styles.name}>{unit.name}</p>
            <h5 className={styles.size}>{unit.size}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkersCard;
