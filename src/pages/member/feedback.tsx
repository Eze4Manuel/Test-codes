import { useState } from 'react';

import Button from '@/components/lib/Button';
import Emoji from '@/components/lib/Emoji';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import TextArea from '@/components/lib/TextArea';
import AuthLayout from '@/layouts/AuthLayout';
import Meta from '@/templates/Meta';

const Feedback = () => {
  const [emoji, setEmoji] = useState<string>('');
  const [ratings, setRatings] = useState<string>('');

  return (
    <AuthLayout meta={<Meta title="Feedback" description="Give Feedback" />}>
      <section className="rounded-[10px] border-[1.5px] border-cci-border bg-cci-black-dim2 px-4 py-6 text-[14px] md:mx-auto md:w-[85%] md:p-8 md:text-[16px] lg:mx-0 lg:w-[90%] lg:p-12 lg:text-[20px]">
        <Heading
          variant="h3"
          className="text-center text-[1.142857em] lg:text-left lg:text-[1.1em]"
        >
          Give Feedback
        </Heading>
        <Text className="my-2 text-center text-[1em] font-medium lg:my-4 lg:text-left">
          What do you think of your overall experience at Celebration Church?
        </Text>

        <form>
          <Emoji value={emoji} setEmoji={setEmoji} />

          <Text className="mb-3 block text-center text-[1em] lg:text-left">
            What are the main reasons for your rating?
          </Text>
          <TextArea
            name="ratings"
            className="text-[1em]"
            rows={8}
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
          />

          <Button
            type="submit"
            size="medium"
            className="my-6 block w-full text-[1em] md:mx-auto md:w-[45%] lg:mx-0 lg:w-[35%]"
          >
            Submit
          </Button>
        </form>
      </section>
    </AuthLayout>
  );
};

export default Feedback;
