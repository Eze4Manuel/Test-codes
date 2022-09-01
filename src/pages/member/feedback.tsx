import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import AuthLayout from '@/layouts/AuthLayout';
import Meta from '@/templates/Meta';

const Feedback = () => {
  return (
    <AuthLayout meta={<Meta title="Feedback" description="Give Feedback" />}>
      <div className="h-500 grid place-items-center gap-5">
        <Heading>Feedback screen</Heading>
        <Text>This is the feedback screen!</Text>
      </div>
    </AuthLayout>
  );
};

export default Feedback;
