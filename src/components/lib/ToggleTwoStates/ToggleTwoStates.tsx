import type { FC } from 'react';
import { useState } from 'react';

import styles from './ToggleTwoStates.module.scss';
import type ToggleTwoStatesProps from './ToggleTwoStates.props';

const ToggleTwoStates: FC<ToggleTwoStatesProps> = ({ list }) => {
  const [activeID, setActiveID] = useState(0);

  return (
    <div className={styles.base}>
      {list.map((item, index) => (
        <span
          key={index}
          className={`cursor-pointer rounded-[55.8585px] py-1 px-2 ${
            activeID === index && 'bg-cci-black text-white'
          } `}
          onClick={() => setActiveID(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ToggleTwoStates;
