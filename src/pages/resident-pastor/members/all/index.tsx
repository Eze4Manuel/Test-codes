import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import AttendanceCard from '@/components/lib/AttendanceCard/Main/index';
import Dropdown3 from '@/components/lib/Dropdown3';
import Loader from '@/components/lib/Loader';
import MembersTable from '@/components/lib/MembersTable/MembersTable';
import { useMediaQuery } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import allMembers from '@/layouts/TabViewLayout/residentPastor/allMembers';
import { fetchAllUsers } from '@/services/member';
import Meta from '@/templates/Meta';
import { cciCampuses, fixedPageItems } from '@/utils/constants';
import { processResponse } from '@/utils/response/processResponse';

const MemberDatabase = () => {
  const [members, setMembers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const bigScreen = useMediaQuery('(min-width:768px)');
  const { isLoading, data } = useQuery('fetchMembers', fetchAllUsers, {
    onSuccess(response) {
      const tableData = processResponse(response);
      return tableData;
    },
  });

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % data.data.data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (data) {
      const endOffset = itemOffset + 10;
      setMembers(data.data.data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.data.data.length / 10));
    }
  }, [itemOffset, data]);

  return (
    <AuthLayout
      meta={
        <Meta
          title="Lead Pastor | Members Database"
          description="Information about all CCI members"
        />
      }
    >
      <TabViewLayout tabs={allMembers}>
        <section className="my-2 items-center md:my-4 md:flex md:justify-between">
          <div className="mb-4 flex w-full items-center gap-4 md:mb-0 md:gap-2">
            <span className="w-max text-base font-bold">Show</span>
            <select className="w-full rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-white p-1 px-2 font-[600] text-cci-grey focus:border-cci-grey-dim2 md:w-[100px]">
              {fixedPageItems.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
            {bigScreen && (
              <span className="w-max text-base font-bold">entries</span>
            )}
          </div>
          <Dropdown3
            options={cciCampuses}
            defaultValue="Filter Results"
            className="md:w-[200px]"
          />
        </section>

        <section className="xxl:flex xxl:items-start xxl:gap-4">
          <div className="xxl:w-1/2">
            <AttendanceCard />
          </div>

          <div className="xxl:w-1/2">
            <div className="mt-4 flex justify-between xxl:mt-0">
              <div className="border-cci-grey-light flex w-full basis-[48%] items-center justify-center gap-2 rounded-xl border-2 p-3 xxl:gap-4">
                <div className="relative h-14 w-14 rounded-full bg-[#68686899]">
                  <Icon
                    icon="akar-icons:people-group"
                    className="absolute top-1/2 left-1/2 h-8  w-8 -translate-x-1/2 -translate-y-1/2 text-white"
                  />
                </div>
                <div>
                  <div className="text-base text-cci-grey-dim ">Worker</div>
                  <div className="text-lg font-bold">3000</div>
                </div>
              </div>

              <div className="border-cci-grey-light flex w-full basis-[48%] items-center  justify-center gap-2 rounded-xl border-2 p-3 xxl:gap-4">
                <div className="relative h-14 w-14 rounded-full bg-cci-red">
                  <Icon
                    icon="fluent:people-28-regular"
                    className="absolute top-1/2 left-1/2 h-8  w-8 -translate-x-1/2 -translate-y-1/2 text-white"
                  />
                </div>
                <div>
                  <div className="text-base text-cci-grey-dim ">Single</div>
                  <div className="text-lg font-bold">3000</div>
                </div>
              </div>
            </div>

            <div className="border-cci-grey-light mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 p-3 xxl:w-[48%] xxl:gap-4">
              <div className="relative h-14 w-14 rounded-[100%] bg-cci-green">
                <Icon
                  icon="fluent:people-28-regular"
                  className="absolute top-1/2 left-1/2  h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-white"
                />
              </div>

              <div className="relative">
                <div className="text-base text-cci-grey-dim ">Married</div>
                <div className="text-lg font-bold">6000</div>
              </div>
            </div>
          </div>
        </section>

        {isLoading ? (
          <div className="my-8">
            <Loader color="grey" />
          </div>
        ) : (
          <MembersTable
            handlePageClick={handlePageClick}
            itemOffset={itemOffset}
            members={members}
            data={data}
            pageCount={pageCount}
          />
        )}
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MemberDatabase;
