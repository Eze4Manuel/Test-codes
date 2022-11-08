import type { SetStateAction } from 'react';

export default interface ToggleTwoStatesProps {
  list: string[];
  setActiveID: React.Dispatch<SetStateAction<number>>;
  activeID: number;
}
