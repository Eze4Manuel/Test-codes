import React from 'react';

import Checkbox from '@/components/lib/Checkbox';

const CelebKidsCheckBoxes = () => {
  return (
    <div className="w-full justify-between md:flex">
      <div className="mb-8 mt-4 flex w-full items-center  gap-1 md:mb-0 ">
        <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
          <Checkbox />
        </span>
        <span className="mr-4 whitespace-nowrap font-[700] text-cci-black">
          Sunday Service
        </span>
        <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
          <Checkbox />
        </span>
        <span className="mr-4 whitespace-nowrap font-[700] text-cci-black">
          MidWeek Service
        </span>
        <span className="mr-2 whitespace-nowrap font-[700] text-cci-black">
          <Checkbox />
        </span>
        <span className="whitespace-nowrap font-[700] text-cci-black">
          Other
        </span>
      </div>
    </div>
  );
};

export default CelebKidsCheckBoxes;
