import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import AttendanceCard from '@/components/lib/AttendanceCard/Main';
import Dropdown2 from '@/components/lib/Dropdown2';
import Dropdown3 from '@/components/lib/Dropdown3';
import Input2 from '@/components/lib/Input2';
import Loader from '@/components/lib/Loader';
import MembersTable from '@/components/lib/MembersTable/MembersTable';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import memberDatabase from '@/layouts/TabViewLayout/leadPastor/memberDatabaseTabs';
import { fetchAllUsers } from '@/services/member';
import Meta from '@/templates/Meta';
import { cciCampuses } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

const MemberDatabase = () => {
  const [members, setMembers] = useState([]);

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
        rightComponent={<Dropdown2 options={[]} />}
      >
        <section className="mb-12 flex justify-between">
          <div className="flex w-[200px] justify-between">
            <span className="relative top-1 text-base font-bold">Show</span>
            <div className="w-[100px]">
              <Input2 type="number" />
            </div>
            <span className="relative top-1 text-base font-bold">entries</span>
          </div>
          <Dropdown3 options={cciCampuses} defaultValue={'Filter Results'} />
        </section>
        <section className="">
          <div className="my-[2em] flex justify-between">
            <div className="w-[45%]">
              <AttendanceCard />
            </div>
            <div className="w-[43%]">
              <div className="flex justify-between">
                <div className="border-cci-grey-light flex w-[250px] justify-around rounded-xl border-2 p-3">
                  <div className="bg-cci-grey-light relative h-14 w-14 rounded-full">
                    <Icon
                      icon="akar-icons:people-group"
                      className="relative top-[10px] mx-auto h-8 w-8 text-white"
                    />
                  </div>
                  <div className="relative">
                    <div className="text-base text-cci-grey-dim ">Worker</div>
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

        {isLoading ? (
          <Loader color="grey" />
        ) : (
          <MembersTable tableData={members} />
        )}

        <section className="mt-6 flex justify-between">
          <div className=" relative top-5">Showing 1 to 7 of 7 entries</div>
          <div className="border-cci-grey-light flex h-[60px] rounded-lg border-2 text-cci-grey">
            <span className="relative top-4 px-6">Previous</span>
            <div className="bg-cci-black px-5 text-white">
              <span className="relative top-4">1</span>
            </div>
            <span className="relative top-4 px-6">Next</span>
          </div>
        </section>
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MemberDatabase;
