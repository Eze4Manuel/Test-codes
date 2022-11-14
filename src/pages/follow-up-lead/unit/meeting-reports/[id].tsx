import { useState } from 'react';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import { Caution } from '@/public/assets/icons/caution';
import Meta from '@/templates/Meta';

const ActionReport = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <AuthLayout
      meta={
        <Meta
          title="Meeting Report | Follow-up Unit Lead"
          description="Meeting report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <section>
          <h1 className="font-[700]">
            Write Report{' '}
            <span className="font-[500]">(Apr 1 - Apr 7, 2022)</span>
          </h1>

          <div className="mt-4 h-[200px] w-full rounded-[5px] border border-[#8B8887]"></div>
          <div className="mt-8 flex gap-4">
            <Button size="medium" className="basis-[48%] md:basis-1">
              Save
            </Button>
            <Button
              variant="outline"
              size="medium"
              className="basis-[48%] md:basis-1"
              onClick={() => setToggleModal(true)}
            >
              Clear
            </Button>
          </div>
        </section>
      </TabViewLayout>

      {toggleModal && (
        <Modal size="small">
          <div className="px-6 lg:px-8 lg:pt-4">
            <div className="my-6 mx-auto w-[45px] lg:w-[72px]">{Caution}</div>
            <Heading className="text-[26px] lg:text-[30px]">Warning</Heading>
            <Text className="mb-4 text-[14px] md:mb-4 md:font-[500] lg:text-[16px]">
              Are you sure you want to clear this report?
            </Text>
            <div className="-mx-6 mt-6 flex w-auto border border-t-[#68686880] lg:-mx-8">
              <p
                className="basis-1/2 cursor-pointer border-r border-t-[#68686880] p-4"
                onClick={() => setToggleModal(false)}
              >
                CANCEL
              </p>
              <p className="basis-1/2 cursor-pointer p-4 text-cci-red">
                YES, CLEAR
              </p>
            </div>
          </div>
        </Modal>
      )}
    </AuthLayout>
  );
};

export default ActionReport;
