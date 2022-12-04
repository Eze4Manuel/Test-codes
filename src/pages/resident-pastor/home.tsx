import { Icon } from '@iconify/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import BarChart from '@/components/lib/BarChart/BarChart';
import CardWithHeader from '@/components/lib/CardWithHeader/CardWithHeader';
import ChartLabel from '@/components/lib/ChartLabel/ChartLabel';
import Dropdown2 from '@/components/lib/Dropdown2';
import GraphBars from '@/components/lib/GraphBars/GraphBars';
import NotificationCard from '@/components/lib/NotificationCard/NotificationCard';
import ToggleTwoStates from '@/components/lib/ToggleTwoStates/ToggleTwoStates';
import { attendanceData } from '@/data/barChartData';
import { attendanceLabel } from '@/data/chartLabelData';
import { useMediaQuery } from '@/hooks';
import { useHandleOutsideClicks } from '@/hooks/useHandleOutsideClicks';
import AuthLayout from '@/layouts/AuthLayout';
import { moneyBag } from '@/public/assets/icons/money-bag';
import Meta from '@/templates/Meta';
import {
  cardDisbursed,
  dummyBudgetRequest,
  dummyExpenditure,
  dummyNotifications,
  dummyUnits,
} from '@/utils/constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const [activeID, setActiveID] = useState(0);
  const bigScreen = useMediaQuery('(min-width: 768px)');
  const maxScreen = useMediaQuery('(min-width: 1280px)');
  const [activeTab, setActiveTab] = useState(0);
  const [notificationModal, setNotificationModal] = useState(false);
  const notificationModalRef = useRef(null);

  useHandleOutsideClicks(notificationModalRef, () =>
    setNotificationModal(false)
  );

  return (
    <AuthLayout
      meta={
        <Meta
          title="Home | Resident Pastor"
          description="Home for resident pastor."
        />
      }
    >
      <section className="-mx-5  bg-cci-black-dim2 p-5 xxl:-mx-10 xxl:p-10">
        {/* the negative margins are neccessary to spread the background */}
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          {bigScreen ? (
            <>
              {dummyUnits.map((item, index) => (
                <div
                  key={index}
                  className={`border-[rgba(104, 104, 0.5)] text-[rgba(104, 104, 0.8)] cursor-pointer rounded-[47.915px] border bg-cci-grey-border py-2 px-8 font-[14.4px] ${
                    activeTab === index ? 'bg-[#101318] text-white' : ''
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.label}
                </div>
              ))}
            </>
          ) : (
            <Dropdown2 options={dummyUnits} placeholder="Select a Unit" />
          )}
        </div>

        <section className="mt-10 xxl:grid xxl:grid-cols-4 xxl:grid-rows-layout xxl:gap-2 xxxl:gap-6">
          <div className=" w-full xxl:col-span-2 xxl:row-start-1 xxl:row-end-2">
            <div className="h-full rounded-[10px] border-[1.5px] border-cci-grey/[0.15] bg-white p-4 xxl:py-8 xxl:px-10">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-[700] text-cci-black md:text-[16px]">
                  Total Attendance
                </h3>
                <ToggleTwoStates
                  setActiveID={setActiveID}
                  activeID={activeID}
                  list={['Weekly', 'Monthly']}
                />
              </div>
              <ChartLabel data={attendanceLabel} />
              <div className="relative">
                <BarChart data={attendanceData} />
                <Icon
                  icon="ion:chevron-forward-circle-outline"
                  className="font-400 absolute left-[98%] top-[80%] cursor-pointer bg-white text-2xl md:text-3xl"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 my-6 xxl:row-span-2 xxl:row-start-1 xxl:row-end-3 xxl:my-0">
            <CardWithHeader
              header="Budget Request"
              total={10}
              rightComponent={
                <span className="text-[14px] text-cci-green">View all</span>
              }
            >
              <div>
                {dummyBudgetRequest.map((item, index) => (
                  <div
                    key={index}
                    className="my-4 flex items-center justify-between rounded-[10px] border border-cci-grey/10 bg-cci-black-dim2 py-2 px-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full bg-cci-black text-white">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          {item.unit.charAt(0)}
                        </span>
                      </div>
                      <div className="leading-5">
                        <div className="font-[700]">{item.unit}</div>
                        <span className="text-[12px] font-[700] text-cci-grey">
                          {new Intl.NumberFormat('en-us', {
                            currency: 'NGN',
                            style: 'currency',
                          }).format(item.request)}
                        </span>
                      </div>
                    </div>
                    <span>
                      <Icon
                        icon="material-symbols:arrow-right-alt-rounded"
                        className="text-3xl"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </CardWithHeader>
          </div>

          {!maxScreen && (
            <div className="my-6 flex flex-col justify-between md:flex-row">
              <div className="basis-[48%] rounded-[10px] bg-cci-black px-4 py-8">
                <div className="flex justify-between">
                  <div className="relative h-10 w-10 rounded-full bg-white/[0.18]">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {moneyBag}
                    </span>
                  </div>
                  <Dropdown2
                    options={cardDisbursed}
                    placeholder="Last 30 days"
                  />
                </div>
                <div className="text-white">
                  <p className="mt-8 mb-1 text-[18px] font-normal">
                    Total Cash Disbursed
                  </p>
                  <h1 className="text-[22px] font-[700]">NGN600,000</h1>
                  <GraphBars />
                </div>
              </div>

              <div className="basis-[48%] xxl:row-start-2">
                <CardWithHeader
                  className="h-full"
                  header="Expenditure"
                  rightComponent={
                    <Icon
                      icon="material-symbols:keyboard-arrow-down-rounded"
                      className="text-3xl"
                    />
                  }
                >
                  <div className="mx-auto mt-6 w-full max-w-[200px] p-2">
                    <Doughnut data={dummyExpenditure} />
                  </div>
                </CardWithHeader>
              </div>
            </div>
          )}

          {maxScreen && (
            <>
              <div className="rounded-[10px] bg-cci-black px-4 py-8 xxl:row-start-2 xxl:row-end-4 xxxl:px-6">
                <div className="flex justify-between gap-4">
                  <div className="relative h-10 w-10 rounded-full">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {moneyBag}
                    </span>
                  </div>
                  <Dropdown2
                    options={cardDisbursed}
                    placeholder="Last 30 days"
                    fontWeight={500}
                    fontSize="12px"
                  />
                </div>
                <div className="text-white">
                  <p className="mt-8 mb-1 text-[18px] font-normal">
                    Total Cash Disbursed
                  </p>
                  <h1 className="font-[700] xxxl:text-[30px]">NGN600,000</h1>
                  <GraphBars />
                </div>
              </div>

              <div className="xxl:row-start-2 xxl:row-end-4 xxl:my-0">
                <CardWithHeader
                  className="h-full"
                  header="Expenditure"
                  rightComponent={
                    <Icon
                      icon="material-symbols:keyboard-arrow-down-rounded"
                      className="text-3xl"
                    />
                  }
                >
                  <div className="mt-6 w-full p-2">
                    <Doughnut data={dummyExpenditure} />
                  </div>
                </CardWithHeader>
              </div>
            </>
          )}

          <div className="xxl:col-start-3 xxl:col-end-5 xxl:row-start-3 xxl:row-end-4">
            <CardWithHeader
              className="h-full"
              header="Notifications"
              total={7}
              rightComponent={
                <span
                  className="relative rounded-full border border-black text-[14px] text-cci-green md:border-2"
                  ref={notificationModalRef}
                >
                  <Icon
                    icon="ph:dots-three"
                    className="cursor-pointer text-black md:text-[18px]"
                    onClick={() => setNotificationModal(!notificationModal)}
                  />
                  {notificationModal && (
                    <div className="absolute right-0 top-[120%] z-10 w-[200px] rounded-[8px] border-[0.4px] border-[#8B888780] bg-white p-4 text-[#1D1D1F]">
                      <p className="mb-1">View all reports</p>
                      <p>View all feedback</p>
                    </div>
                  )}
                </span>
              }
            >
              <NotificationCard data={dummyNotifications} />
            </CardWithHeader>
          </div>
        </section>
      </section>
    </AuthLayout>
  );
};

export default Home;
