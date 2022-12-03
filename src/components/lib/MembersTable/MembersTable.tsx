import { useRouter } from 'next/router';
import type { FC } from 'react';

import { cciCampuses, genders, serviceUnits } from '@/utils/constants';

import Dropdown3 from '../Dropdown3';
import Input2 from '../Input2';
import type MembersTableProps from './MembersTable.props';

const MembersTable: FC<MembersTableProps> = ({ tableData }) => {
  const router = useRouter();

  const viewMember = () => {
    router.push('/lead-pastor/member-database/1');
  };

  return (
    <section className="mt-[100px]">
      <div className="flex justify-between border-b-2 border-[#686868] pb-4 text-lg font-bold">
        <div className="min-w-[5%]">SN</div>
        <div className="min-w-[30%]">Full Name</div>
        <div className="min-w-[20%]">Gender</div>
        <div className="min-w-[20%]">Campus</div>
        <div className="min-w-[20%]">Service Unit</div>
      </div>

      <div className="border-cci-grey-light flex justify-between border-b-2 py-4 text-base text-cci-grey-dim">
        <div className="min-w-[5%]">#</div>
        <div className="min-w-[30%]">
          <Input2 />
        </div>
        <div className="min-w-[20%]">
          <Dropdown3 options={genders} />
        </div>
        <div className="min-w-[20%]">
          <Dropdown3 options={cciCampuses} />
        </div>
        <div className="min-w-[20%]">
          <Dropdown3 options={serviceUnits} />
        </div>
      </div>

      <div>
        {tableData?.map((item, index) => (
          <div
            key={index}
            onClick={() => viewMember()}
            className="border-cci-grey-light flex justify-between border-b-2 py-6 text-base text-cci-grey-dim"
          >
            <div className="min-w-[5%]">1</div>
            <div className="w-[30%] text-cci-green">
              {item.first_name} {item.last_name}
            </div>
            <div className="min-w-[20%]">{item.gender}</div>
            <div className="min-w-[20%]">Ikeja</div>
            <div className="min-w-[20%]">Protocol</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembersTable;
