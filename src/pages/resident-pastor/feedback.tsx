import FeedbackForm from '@/components/shared/FeedbackForm';
import AuthLayout from '@/layouts/AuthLayout';
import Meta from '@/templates/Meta';

const Feedback = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Feedback"
          description="Feedback form unit for service unit CCI"
        />
      }
    >
      <FeedbackForm />
    </AuthLayout>
  );
};

export default Feedback;
