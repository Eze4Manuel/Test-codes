import type { FormEvent } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import TextArea from '@/components/lib/TextArea';
import AuthLayout from '@/layouts/AuthLayout';
import { sendCheck } from '@/public/assets/icons/emoji/sendCheck';
import { serviceUnitFeedback } from '@/services/feedbacks';
import Meta from '@/templates/Meta';
import { processResponse } from '@/utils/response/processResponse';

const Feedback = () => {
  const [sendTo, setSendTo] = useState('');
  const [feedback, setFeedback] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const { mutate, isLoading } = useMutation(serviceUnitFeedback, {
    onSuccess(response) {
      const data = processResponse(response);

      if (data) {
        setSuccessModal(true);
        setSendTo('');
        setFeedback('');
        setSuggestions('');
      }
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      send_to: sendTo,
      service_experience: feedback,
      suggestions,
    });
  };

  return (
    <>
      <AuthLayout
        meta={
          <Meta
            title="Feedback"
            description="Feedback form unit for service unit CCI"
          />
        }
      >
        <section className="rounded-[10px] border-[1.5px] border-cci-border bg-cci-black-dim2 px-4 py-6 md:mx-auto md:w-[85%] md:p-10 lg:w-full">
          <form onSubmit={handleSubmit}>
            <label htmlFor="send-to" className="mb-6 block">
              <span className="block font-medium">Send to</span>
              <input
                name="send-to"
                value={sendTo}
                onChange={(e) => setSendTo(e.target.value)}
                className="mt-2 w-full rounded-[5px] border border-[#68686880] p-2 outline-0 focus:border-cci-grey"
                required
              />
            </label>

            <TextArea
              label="Feedback or Complaints"
              name="feedback"
              className="mb-6 rounded-[5px]"
              labelClassname="font-medium"
              rows={7}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <TextArea
              label="Any Suggestions?"
              name="suggestions"
              className="mb-6 rounded-[5px]"
              labelClassname="font-medium"
              rows={7}
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
            />
            <Button
              size="medium"
              className="block w-full md:mx-auto md:w-[60%] lg:mx-0 lg:w-[25%]"
              loading={isLoading}
            >
              Submit
            </Button>
          </form>
        </section>
      </AuthLayout>
      {successModal && (
        <Modal>
          <div className="px-6 lg:px-4 lg:pb-7">
            <div className="my-6 mx-auto w-[45px] lg:w-[72px]">{sendCheck}</div>
            <Heading className="text-[26px] lg:text-[30px]">
              Feedback Sent!
            </Heading>
            <Text className="mb-4 text-[14px] lg:text-[16px]">
              Thank you for taking time to send in your feedback. We are looking
              forward to making your experience even better at Celebration
              Church.
            </Text>
            <Button
              size="small"
              className="w-full md:w-[70%] lg:mt-4"
              onClick={() => setSuccessModal(false)}
            >
              Done
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Feedback;
