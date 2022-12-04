import { useState } from 'react';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Modal from '@/components/lib/Modal';
import BudgetRequestTable from '@/components/lib/Tables/BudgetRequestTable';
import Text from '@/components/lib/Text';
import TextArea from '@/components/lib/TextArea';
import { useMediaQuery } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import {
  residentPastorTabs,
  residentPastorTabsBig,
} from '@/layouts/TabViewLayout/residentPastor/budgets';
import { Caution } from '@/public/assets/icons/caution';
import Meta from '@/templates/Meta';
import { dummyBudgetRequestTable } from '@/utils/constants';

const BudgetRequest = () => {
  const bigScreen = useMediaQuery('(min-width: 1024px)');
  const [rejectModal, setRejectModal] = useState(false);
  const [rejectionFeedback, setRejectionFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRejectionFeedback = () => {
    setRejectModal(false);
    setRejectionFeedback(true);
  };

  return (
    <>
      <AuthLayout
        meta={
          <Meta
            title="Budget Request | Resident Pastor"
            description="Budget Request for resident pastor."
          />
        }
      >
        <TabViewLayout
          tabs={bigScreen ? residentPastorTabsBig : residentPastorTabs}
        >
          <section>
            <div className="my-4 md:flex md:items-center md:gap-6">
              <div className="mb-4 flex w-full items-center justify-start gap-3 md:mb-0 md:w-auto">
                <span className="w-[20%] font-[700] text-cci-black md:w-auto">
                  From:
                </span>

                <input
                  type="date"
                  className="block w-[80%] rounded-[5px] px-2"
                />
              </div>

              <div className="flex w-full items-center gap-3 md:w-auto md:justify-start">
                <span className="w-[20%] font-[700] text-cci-black md:w-auto">
                  To:
                </span>
                <input
                  type="date"
                  className="block w-[80%] rounded-[5px] px-2 md:w-auto"
                />
              </div>
            </div>

            <BudgetRequestTable tableData={dummyBudgetRequestTable} />
            <div className="md:my-8 md:mx-auto md:flex md:w-[80%] md:gap-4">
              <Button
                variant="outline_red"
                size="medium"
                className="my-4 w-full md:my-0"
                onClick={() => setRejectModal(true)}
              >
                Reject Budget Request
              </Button>

              <Button size="medium" className="w-full">
                Approve Budget Request
              </Button>
            </div>
          </section>
        </TabViewLayout>
      </AuthLayout>

      {rejectModal && (
        <Modal size="small">
          <div className="px-6 lg:px-8 lg:pt-4">
            <div className="my-6 mx-auto w-[45px] lg:w-[72px]">{Caution}</div>
            <Heading className="text-[26px] lg:text-[30px]">Warning</Heading>
            <Text className="mb-4 text-[14px] font-[500] lg:text-[16px]">
              You cannot undo this action
            </Text>

            <div className="-mx-6 mt-6 flex w-auto border border-t-[#68686880] lg:-mx-8">
              <p
                className="basis-1/2 cursor-pointer border-r border-t-[#68686880] p-4"
                onClick={() => setRejectModal(false)}
              >
                Cancel
              </p>

              <p
                className="basis-1/2 cursor-pointer p-4 text-cci-red"
                onClick={handleRejectionFeedback}
              >
                Reject Budget
              </p>
            </div>
          </div>
        </Modal>
      )}

      {rejectionFeedback && (
        <Modal size="small">
          <div className="px-4 lg:px-6 lg:pt-4">
            <div className="my-6 mx-auto w-[45px] lg:w-[72px]">{Caution}</div>
            <Heading className="w-full text-[18px] lg:text-[22px]">
              Why did you reject this budget?
            </Heading>
            <Text className="mb-4 text-[14px] font-[500] lg:text-[16px]">
              This feedback may help prevent future errors.
            </Text>

            <TextArea
              name="rejectionFeedback"
              className="h-[150px]"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <div className="mt-4 mb-8 flex gap-4">
              <Button
                className="w-full"
                size="medium"
                variant="outline"
                onClick={() => setRejectionFeedback(false)}
              >
                Cancel
              </Button>

              <Button className="w-full" size="medium">
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BudgetRequest;
