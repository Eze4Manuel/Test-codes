import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Select from 'react-select';

import Input2 from '@/components/lib/Input2';
import Text from '@/components/lib/Text';
import { useToggle } from '@/hooks';

import { celebKidsAndParentData } from '../../../../data/celebKidsMembers';
import { celebKidsfilterOptions } from '../../../../utils/constants';
import Button from '../../../lib/Button/Button';
import CelebKidsAndParentsTable from '../celebKidsAndParentsTable/CelebKidsAndParentsTableData';
import AddCelebKid from './addCelebKid/addCelebKid';

const CelebKidsMembership = () => {
  const [modalIsOpen, toggleModalIsOpen] = useToggle(false);
  const [searchValue] = useState('');

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
            defaultValue={celebKidsfilterOptions}
          />
        </div>

        <div className="flex items-center gap-3">
          <Text variant="caption" className="whitespace-nowrap font-bold">
            Search:
          </Text>
          <Input2 type="search" placeholder="kids Name" />
        </div>
      </div>
      <div className="mt-6 w-full md:w-[30%]">
        <div>
          <Button
            variant="outline"
            size="medium"
            className="flex items-center gap-2"
            onClick={toggleModalIsOpen}
          >
            <Icon icon="akar-icons:plus" className="text-lg" />
            Add New Celeb Kid Profile
          </Button>
        </div>
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
      <AddCelebKid isOpen={modalIsOpen} toggleModalIsOpen={toggleModalIsOpen} />
    </div>
  );
};

export default CelebKidsMembership;
