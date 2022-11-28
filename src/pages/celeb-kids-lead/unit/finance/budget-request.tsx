import { Icon } from '@iconify/react';

import Dropdown3 from '@/components/lib/Dropdown3';
import FollowUpUnitBudgetTable from '@/components/shared/BudgetReportsTable/FollowUpUnit/FollowUpUnit';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import budgetRequestTabs from '@/layouts/TabViewLayout/shared/budgetRequestTabs';
import Meta from '@/templates/Meta';
import { cciCampuses } from '@/utils/constants';

const BudgetReport = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Budget Request | Celeb Kids Lead"
          description="Budget requests for the celeb kids unit."
        />
      }
    >
      <TabViewLayout tabs={budgetRequestTabs}>
        <section className="flex flex-col-reverse justify-between md:flex-row">
          <div className="grid w-[350px] justify-between sm:flex">
            <div className="grid w-[200px] sm:flex md:w-[150px]">
              <span className="relative top-[7px] mb-3 mr-2 text-cci-black sm:mb-0">
                From:
              </span>
              <Dropdown3 options={cciCampuses} />
            </div>

            <div className="mt-4 grid w-[200px] sm:mt-0 sm:flex md:w-[150px]">
              <span className="relative top-[7px] mb-3 mr-2 text-cci-black sm:mb-0">
                To:
              </span>
              <Dropdown3 options={cciCampuses} />
            </div>
          </div>
          <div className="mb-[50px] h-[40px] w-[200px] rounded-3xl border-2 border-cci-green bg-cci-green2/25 py-1 px-[30px] text-cci-green md:mb-0">
            Budget Approved
          </div>
        </section>

        <section className="mt-[70px] flex flex-wrap">
          <div className="mb-[50px] flex w-[300px]">
            <Icon
              icon="carbon:circle-solid"
              className="relative top-[6px] mr-3 text-cci-grey-dim"
            />
            <span className="text-lg font-bold">Cashflow:</span>
            <span className="ml-1 text-lg font-bold text-cci-grey">
              NGN165,000
            </span>
          </div>

          <div className="mb-[50px] flex w-[300px]">
            <Icon
              icon="carbon:circle-solid"
              className="relative top-[6px] mr-3 text-cci-green"
            />
            <span className="text-lg font-bold">Current Balance:</span>
            <span className="ml-1 text-lg font-bold text-cci-grey">
              NGN15,000
            </span>
          </div>

          <div className="mb-50px flex w-[300px]">
            <Icon
              icon="carbon:circle-solid"
              className="relative top-[6px] mr-3 text-cci-red"
            />
            <span className="text-lg font-bold">Expenditure:</span>
            <span className="ml-1 text-lg font-bold text-cci-grey">
              NGN150,000
            </span>
          </div>
        </section>

        <FollowUpUnitBudgetTable />
      </TabViewLayout>
    </AuthLayout>
  );
};

export default BudgetReport;
