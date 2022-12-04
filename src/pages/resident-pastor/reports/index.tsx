import { useEffect, useState } from 'react';

import Checkbox from '@/components/lib/Checkbox';
import ReportsResidentPastor from '@/components/lib/Tables/ReportsResidentPastor';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import { reportsTab } from '@/layouts/TabViewLayout/residentPastor/reportsTab';
import Meta from '@/templates/Meta';
import { dummyReportsResident, units } from '@/utils/constants';

const Reports = () => {
  const [reports, setReports] = useState(dummyReportsResident);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % dummyReportsResident.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + 10;
    setReports(dummyReportsResident.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dummyReportsResident.length / 10));
  }, [itemOffset]);

  return (
    <AuthLayout
      meta={
        <Meta
          title="Reports | Resident Pastor"
          description="Reports for resident pastor."
        />
      }
    >
      <TabViewLayout tabs={reportsTab}>
        <section>
          <div className="mb-4 flex w-full items-center gap-4 md:mb-0 md:gap-2">
            <span className="w-max text-base font-bold">Show</span>
            <select className="w-full rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-white p-1 px-2 font-[600] text-cci-grey focus:border-cci-grey-dim2 md:w-[200px]">
              {units.map((item, index) => (
                <option key={index} value={item.value} className="my-2">
                  {item.text}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-8 flex gap-4">
            <Checkbox label="Unit Reports" />
            <Checkbox label="Meeting Reports" />
          </div>
        </section>
        <ReportsResidentPastor
          tableData={reports}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          itemOffset={itemOffset}
          data={undefined}
        />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default Reports;
