import { useState } from 'react';

import {
  Amazing,
  Bad,
  Good,
  Okay,
  Terrible,
} from '@/public/assets/icons/emoji/emojis';

import Text from '../Text';
import styles from './Emoji.module.scss';

const emojis = [
  { icon: Terrible, text: 'Terrible' },
  { icon: Bad, text: 'Bad' },
  { icon: Okay, text: 'Okay' },
  { icon: Amazing, text: 'Amazing' },
  { icon: Good, text: 'Good' },
];

const Emoji = () => {
  const [activeEmoji, setActiveEmoji] = useState(-1);

  return (
    <div className={styles.container}>
      {emojis.map((emoji, index) => (
        <div key={index} onClick={() => setActiveEmoji(index)}>
          <div
            className={`${activeEmoji === index ? 'w-[45px]' : 'w-[32px]'} `}
          >
            {emoji.icon}
          </div>
          <Text className="text-center">{emoji.text}</Text>
        </div>
      ))}
    </div>
  );
};

export default Emoji;
