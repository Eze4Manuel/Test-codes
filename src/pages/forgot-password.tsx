import { useRouter } from 'next/router';

import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import Meta from '@/templates/Meta';

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <OnboardingLayout
      heading="Forgot your password?"
      subheading="No worries, we’ll send password reset instructions to your e-mail."
      meta={
        <Meta
          title="Forgot Password"
          description="Forgot your password? No worries, we'll sned password reset instructions to your e-mail."
        />
      }
    >
      <Input labelText="E-mail address" type="email" />

      <div className="mt-20 flex w-full flex-col items-center gap-5 text-center">
        <Button
          size="large"
          className="w-full max-w-[450px]"
          onClick={() => router.push('/reset-password')}
        >
          Send instructions
        </Button>

        <Text className="text-cci-grey-dim" variant="caption">
          Didn&apos;t get an email?{' '}
          <span className="cursor-pointer font-bold text-cci-black">
            Resend
          </span>
        </Text>
      </div>
    </OnboardingLayout>
  );
};

export default ForgotPassword;
