import { Icon } from '@iconify/react';
import router from 'next/router';
import React, { useState } from 'react';
import Select from 'react-select';

import Button from '@/components/lib/Button';
import Input2 from '@/components/lib/Input2';
import Text from '@/components/lib/Text';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';
import { celebKidsAndParentData } from '@/data/celebKidsMembers';
import { celebKidsfilterOptions } from '@/utils/constants';

import CelebKidsAndParentsTable from './celebKidsAndParentsTable';
import LogAttendance from './kidsAttendanceTable/index';

const CelebKidsMembership = () => {
  const [searchValue] = useState('');
  const [selectOption, setSelectOption] = useState(
    celebKidsfilterOptions[0]?.value
  );
  const [activeID, setActiveID] = useState(0);

  return (
    <div>
      <div className="w-full justify-between md:flex">
        <div className="mb-4 flex w-full items-center  gap-1 md:mb-0 ">
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Show:
          </span>

          <Select
            className="w-full md:w-[35%] lg:w-[30%]"
            options={celebKidsfilterOptions}
            defaultValue={celebKidsfilterOptions[0]}
            onChange={(e: any) => {
              setSelectOption(e?.value);
            }}
          />
        </div>

        {selectOption === celebKidsfilterOptions[0]?.value ? (
          <div className="flex items-center gap-3">
            <Text variant="caption" className="whitespace-nowrap font-bold">
              Search:
            </Text>
            <Input2 type="search" placeholder="kids Name" />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <ToggleTwoStates
              setActiveID={setActiveID}
              activeID={activeID}
              list={['Data', 'Chart']}
            />
          </div>
        )}
      </div>
      {selectOption === celebKidsfilterOptions[0]?.value ? (
        <>
          <div className="mt-6 w-full md:w-[30%]">
            <Button
              variant="outline"
              size="medium"
              className="flex w-full items-center gap-2 text-center"
              onClick={() =>
                router.push(`${router.pathname}/create-new-celeb-kid`)
              }
            >
              <Icon icon="akar-icons:plus" className="text-lg" />
              Create A Celeb Kid Profile
            </Button>
          </div>
          <div className="grid w-full gap-10">
            <CelebKidsAndParentsTable
              celebKidsAndParentsTableData={celebKidsAndParentData}
              page={1}
              limit={10}
              pages={1}
              searchValue={searchValue}
            />
          </div>
        </>
      ) : (
        <div className="grid w-full gap-10">
          <LogAttendance />
        </div>
      )}
    </div>
  );
};

export default CelebKidsMembership;
