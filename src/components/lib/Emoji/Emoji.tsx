import type { FC } from 'react';

import {
  Amazing,
  AmazingActive,
  Bad,
  BadActive,
  Good,
  GoodActive,
  Okay,
  OkayActive,
  Terrible,
  TerribleActive,
} from '@/public/assets/icons/emoji/emojis';

import Text from '../Text';
import styles from './Emoji.module.scss';
import type EmojiProps from './Emoji.props';

const Emoji: FC<EmojiProps> = ({ activeEmoji, setEmoji, setActiveEmoji }) => {
  const emojis = [
    { icon: Terrible, iconActive: TerribleActive, text: 'Terrible' },
    { icon: Bad, iconActive: BadActive, text: 'Bad' },
    { icon: Okay, iconActive: OkayActive, text: 'Okay' },
    { icon: Amazing, iconActive: AmazingActive, text: 'Amazing' },
    { icon: Good, iconActive: GoodActive, text: 'Good' },
  ];

  const handleClick = (index: number) => {
    if (activeEmoji === index) {
      // Undo previous selection
      setActiveEmoji(-1);
    } else {
      // create a new selection
      setActiveEmoji(index);
    }

    if (emojis[index]) {
      setEmoji(emojis[index]!.text);
    }
  };

  return (
    <div className={styles.container}>
      {emojis.map((emoji, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`${styles.emojiContainer} ${
            activeEmoji === index && 'border-[1.8px] border-cci-black'
          }`}
        >
          {activeEmoji === index ? (
            <div className="mx-auto w-[32px]">{emoji.iconActive}</div>
          ) : (
            <div className="mx-auto w-[32px]">{emoji.icon}</div>
          )}
          <Text
            className={`${styles.emojiText} ${
              activeEmoji === index
                ? 'font-semibold text-cci-black'
                : 'text-cci-grey-dim'
            }`}
          >
            {emoji.text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Emoji;
