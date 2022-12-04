import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import AttendanceCard from '@/components/lib/AttendanceCard/Main';
import Dropdown2 from '@/components/lib/Dropdown2';
import Dropdown3 from '@/components/lib/Dropdown3';
import Input2 from '@/components/lib/Input2';
import Loader from '@/components/lib/Loader';
import MembersTable from '@/components/shared/MembersTable';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import memberDatabase from '@/layouts/TabViewLayout/leadPastor/memberDatabaseTabs';
import { fetchAllUsers } from '@/services/member';
import Meta from '@/templates/Meta';
import {
  cciCampuses,
  filterOptions,
  genders,
  serviceUnits,
} from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const mockData = {
  Men: 100,
  Women: 50,
  Kids: 20,
  Total_Attendance: 170,
};

const MemberDatabase = () => {
  const [members, setMembers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const { isLoading, data } = useQuery('fetcMembers', fetchAllUsers, {
    onSuccess(response) {
      const tableData = processResponse(response);
      return tableData;
    },
  });

  useEffect(() => {
    if (data) {
      setMembers(data.data.data);
    }
  }, [data]);
  return (
    <AuthLayout
      meta={
        <Meta
          title="Lead Pastor | Members Database"
          description="Information about all CCI members"
        />
      }
    >
      <TabViewLayout
        tabs={memberDatabase}
        rightComponent={
          <Dropdown2 options={cciCampuses} placeholder="Select a campus" />
        }
      >
        <section className="mb-12 flex justify-between">
          <div className="flex w-[200px] justify-between">
            <span className="relative top-1 text-base font-bold">Show</span>
            <div className="w-[100px]">
              <Input2 type="number" />
            </div>
            <span className="relative top-1 text-base font-bold">entries</span>
          </div>
          <Dropdown3 options={filterOptions} defaultValue={'Filter Results'} />
        </section>
        <section className="">
          <div className="my-[2em] flex justify-between">
            <div className="w-[45%]">
              <AttendanceCard data={mockData} loading={false} />
            </div>
            <div className="w-[43%]">
              <div className="flex justify-between">
                <div className="border-cci-grey-light flex w-[250px] justify-around rounded-xl border-2 p-3">
                  <div className="bg-cci-grey-light relative h-14 w-14 rounded-full bg-cci-grey-dim">
                    <Icon
                      icon="akar-icons:people-group"
                      className="relative top-[10px] mx-auto h-8 w-8 text-white "
                    />
                  </div>
                  <div className="relative">
                    <div className="text-base text-cci-grey-dim  ">Worker</div>
                    <div className="mt-1 text-lg font-bold">3000</div>
                  </div>
                </div>
                <div className="border-cci-grey-light flex w-[250px] justify-around rounded-xl border-2 p-3">
                  <div className="relative h-14 w-14 rounded-full bg-cci-red">
                    <Icon
                      icon="fluent:people-28-regular"
                      className="relative top-[10px] mx-auto h-8 w-8 text-white"
                    />
                  </div>
                  <div className="relative">
                    <div className="text-base text-cci-grey-dim ">Single</div>
                    <div className="mt-1 text-lg font-bold">3000</div>
                  </div>
                </div>
              </div>

              <div className="border-cci-grey-light mt-10 flex w-[250px] justify-around rounded-xl border-2 p-3">
                <div className="relative h-14 w-14 rounded-[100%] bg-cci-green">
                  <Icon
                    icon="fluent:people-28-regular"
                    className="relative top-[10px] mx-auto h-8 w-8 text-white"
                  />
                </div>
                <div className="relative">
                  <div className="text-base text-cci-grey-dim ">Married</div>
                  <div className="mt-1 text-lg font-bold">6000</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="border-cci-grey-light flex justify-between border-b-2 py-4 text-base text-cci-grey-dim">
          <div className="min-w-[5%]">#</div>
          <div className="min-w-[30%]">
            <Input2
              onChange={(e: InputEvent) => setSearchValue(e.target.value)}
              placeholder="search for member"
            />
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

        {isLoading ? (
          <Loader color="grey" />
        ) : (
          <MembersTable
            members={members}
            searchValue={searchValue}
            page={1}
            limit={10}
            pages={1}
          />
        )}
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MemberDatabase;
