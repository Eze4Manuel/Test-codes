import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { members } from '../../../data/members';
import {
  cciCampuses,
  filterOptions,
  genders,
  serviceUnits,
} from '../../../utils/constants';
import Button from '../../lib/Button/Button';
import Dropdown3 from '../../lib/Dropdown3';
import Input2 from '../../lib/Input2';
import ToggleTwoStates from '../../lib/ToggleTwoStates/ToggleTwoStates';
import MembersTable from '../MembersTable';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const GeneralMembership = () => {
  const [option, setOptions] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [activeID, setActiveID] = useState(0);
  const router = useRouter();

  return (
    <div>
      <div className="w-full justify-between md:flex">
        <div className="mb-4 flex w-full items-center  gap-1 md:mb-0 ">
          <span className="whitespace-nowrap font-[700] text-cci-black">
            Show:
          </span>
          <select
            onChange={(e) => setOptions(e.target.value)}
            className="w-full rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[35%] lg:w-[20%] "
          >
            {filterOptions.map((item, index) => (
              <option className="cursor-pointer" key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <ToggleTwoStates
          setActiveID={setActiveID}
          activeID={activeID}
          list={['Data', 'Chart']}
        />
      </div>
      <div className="mt-6 w-full md:w-[30%]">
        <Button
          variant="outline"
          size="medium"
          className="flex w-full items-center gap-2 text-center"
          onClick={() => router.push(`${router.pathname}/create-new-member`)}
        >
          <Icon icon="akar-icons:plus" className="text-lg" />
          Add New CCI Member
        </Button>
      </div>
      <p>{option}</p>
      <div className="mt-6 justify-between md:flex">
        <div className="mb-3">#</div>
        <div className="mb-3">
          <Input2
            value={searchValue}
            onChange={(e: InputEvent) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Dropdown3 options={genders} />
        </div>
        <div className="mb-3">
          <Dropdown3 options={cciCampuses} />
        </div>
        <div className="mb-3">
          <Dropdown3 options={serviceUnits} />
        </div>
      </div>
      <div className="grid w-full gap-10">
        <MembersTable
          members={members}
          page={1}
          limit={10}
          pages={1}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default GeneralMembership;
