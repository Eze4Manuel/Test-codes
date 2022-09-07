import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import Meta from '@/templates/Meta';

export const ResetPassword = () => {
  return (
    <OnboardingLayout
      heading="Create new password"
      subheading="Your new password must be different from previously used passwords."
      meta={
        <Meta
          title="Create new password"
          description="Create a new password to log into your account."
        />
      }
    >
      <Input labelText="New password" type="password" />
      <Input labelText="Confirm password" type="password" />

      <Button size="large" className="w-full max-w-[450px]">
        Reset password
      </Button>
    </OnboardingLayout>
  );
};

export default ResetPassword;
