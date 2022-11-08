import UnitReportsTable from '@/components/lib/Tables/UnitReportsTable/UnitReportsTable';
import { useMediaQuery } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';
import { dummyUnitReports, entries } from '@/utils/constants';

const UnitReport = () => {
  const smallScreen = useMediaQuery('(max-width:1440px)');

  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Follow-up Unit Lead"
          description="Unit report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <div className="md:flex md:justify-between">
          <div className="my-4 flex w-full items-center justify-between gap-3 md:basis-[40%] xl:basis-[30%]">
            <span className="font-[700] text-cci-black">Show:</span>
            <select className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 focus:border-cci-grey-dim2 md:w-[80%]">
              {entries.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.entry}
                </option>
              ))}
            </select>
          </div>

          <div className="my-4 flex w-full items-center justify-between gap-3 md:basis-[40%] xl:basis-[30%]">
            <span className="whitespace-nowrap font-[700] text-cci-black">
              {smallScreen ? 'Date:' : 'Search Date:'}
            </span>
            <input className="w-[80%] rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-[80%]" />
          </div>
        </div>

        <UnitReportsTable tableData={dummyUnitReports} itemOffset={0} />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default UnitReport;
