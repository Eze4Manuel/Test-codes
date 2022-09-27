import type { FormEvent } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';

import Button from '@/components/lib/Button';
import Emoji from '@/components/lib/Emoji';
import Heading from '@/components/lib/Heading';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import TextArea from '@/components/lib/TextArea';
import AuthLayout from '@/layouts/AuthLayout';
import { sendCheck } from '@/public/assets/icons/emoji/sendCheck';
import { memberFeedback } from '@/services/feedbacks';
import Meta from '@/templates/Meta';
import { processResponse } from '@/utils/response/processResponse';

enum ServiceExperience {
  TERRIBLE = 'TERRIBLE',
  GOOD = 'GOOD',
  BAD = 'BAD',
  AMAZING = 'AMAZING',
  OKAY = 'OKAY',
}

const Feedback = () => {
  const [emoji, setEmoji] = useState<string>('');
  const [activeEmoji, setActiveEmoji] = useState(-1);
  const [reason, setReason] = useState<string>('');
  const [successModal, setSuccessModal] = useState(false);

  const { mutate, isLoading } = useMutation(memberFeedback, {
    onSuccess(response) {
      const data = processResponse(response);

      if (data) {
        setSuccessModal(true);
        setReason('');
        setEmoji('');
        setActiveEmoji(-1);
      }
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ satisfaction: ServiceExperience.GOOD, reason });
  };

  return (
    <>
      <AuthLayout meta={<Meta title="Feedback" description="Give Feedback" />}>
        <section className="rounded-[10px] border-[1.5px] border-cci-border bg-cci-black-dim2 px-4 py-6 text-[14px] md:mx-auto md:w-[85%] md:p-8 md:text-[16px] lg:mx-0 lg:w-[90%] lg:p-12 lg:text-[20px]">
          <Heading
            variant="h3"
            className="text-center text-[1.142857em] lg:text-left lg:text-[1.1em]"
          >
            Give Feedback
          </Heading>
          <Text className="my-2 text-center text-[1em] font-medium lg:my-4 lg:text-left lg:text-[0.8em]">
            What do you think of your overall experience at Celebration Church?
          </Text>

          <form onSubmit={handleSubmit}>
            <Emoji
              value={emoji}
              setEmoji={setEmoji}
              activeEmoji={activeEmoji}
              setActiveEmoji={setActiveEmoji}
            />

            <Text className="mb-3 block text-center text-[1em] lg:text-left lg:text-[0.8em]">
              What are the main reasons for your rating?
            </Text>
            <TextArea
              name="reason"
              className="text-[1em] lg:text-[0.8em]"
              rows={8}
              value={reason}
              required={true}
              onChange={(e) => setReason(e.target.value)}
            />

            <Button
              type="submit"
              size="medium"
              className="my-6 mb-0 block w-full text-[1em] md:mx-auto md:w-[45%] lg:mx-0 lg:w-[28%] lg:text-[0.8em]"
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
