import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import Meta from '@/templates/Meta';

export const Login = () => {
  return (
    <OnboardingLayout
      heading="Oops,"
      subheading="Looks like you do not have a member account with celebration church. Please contact us using the form below to request for a member account."
      meta={
        <Meta
          title="No account"
          description="You do not have a me,ber account with celebration church."
        />
      }
    >
      <div className="grid w-full grid-cols-2 gap-5">
        <Input labelText="Surname" />
        <Input labelText="Other names" />
      </div>

      <Input labelText="E-mail address" type="email" />
      <Input labelText="Phone number" type="tel" />

      <Button size="large" className="w-full max-w-[450px]">
        Send Request
      </Button>
    </OnboardingLayout>
  );
};

export default Login;
