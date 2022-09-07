import Emoji from '@/components/lib/Emoji';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import AuthLayout from '@/layouts/AuthLayout';
import Meta from '@/templates/Meta';

const Feedback = () => {
  return (
    <AuthLayout meta={<Meta title="Feedback" description="Give Feedback" />}>
      <section className="bg-[rgba(16, 19, 24, 0.02)] text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        <Heading variant="h3" className="text-[1em]">
          Give Feedback
        </Heading>
        <Text className="font-medium">
          What do you think of your overall experience at Celebration Church?
        </Text>

        <Emoji />
      </section>
    </AuthLayout>
  );
};

export default Feedback;
