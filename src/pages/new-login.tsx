import Link from 'next/link';

import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import Meta from '@/templates/Meta';

export const NewLogin = () => {
  return (
    <OnboardingLayout
      hideBackButton
      heading="Welcome To Celebration Church "
      subheading="Reset your password to complete your profile."
      meta={
        <Meta
          title="Welcome to Celebration Church."
          description="Reset your password to complete your profile."
        />
      }
    >
      <Input labelText="Default password" type="password" />
      <Input labelText="New password" type="password" />
      <Input labelText="Confirm password" type="password" />

      <div className="flex w-full flex-col items-center gap-5 text-center">
        <Button size="large" className="w-full max-w-[450px]">
          Reset Password
        </Button>

        <Text className="text-cci-grey-dim" variant="caption">
          Already reset your default password?{' '}
          <Link href="login" passHref>
            <a className="cursor-pointer font-bold text-cci-black">Log in</a>
          </Link>
        </Text>
      </div>
    </OnboardingLayout>
  );
};

export default NewLogin;
