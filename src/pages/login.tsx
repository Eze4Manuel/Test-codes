import Link from 'next/link';

import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import Meta from '@/templates/Meta';

export const Login = () => {
  return (
    <OnboardingLayout
      heading="Welcome Back!"
      subheading="At CCI, We are committed to knowing Christ and making him known."
      meta={
        <Meta
          title="Log Into Your Account"
          description="Log in to your CGOP Account."
        />
      }
    >
      <Input labelText="E-mail address" type="email" />
      <Input labelText="Password" type="password" />

      <div className="flex w-full flex-col items-center gap-5 text-center">
        <Button size="large" className="w-full max-w-[450px]">
          Log in
        </Button>

        <Link href="/forgot-password" passHref>
          <a>
            <Text className="text-cci-grey-dim" variant="caption">
              Forgot your password?
            </Text>
          </a>
        </Link>
      </div>
    </OnboardingLayout>
  );
};

export default Login;
