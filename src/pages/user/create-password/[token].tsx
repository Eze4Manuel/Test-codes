import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import toaster from 'react-hot-toast';
import { useMutation } from 'react-query';

import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import { createPassword } from '@/services/auth';
import Meta from '@/templates/Meta';
import { processResponse } from '@/utils/response/processResponse';
import { validateCreatePasswordInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

const initialState = {
  password: '',
  reentered_password: '',
};

export const CreatePassword = () => {
  const router = useRouter();
  const [payload, setPayload] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  useEffect(() => {
    if (router?.query?.token) {
      localStorage.setItem('token', router.query.token as string);
    }
  });

  const { mutate, isLoading } = useMutation(
    () => createPassword(router?.query?.token as string, payload),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          toaster.success('Passwor created successfully!');
          router.push('/login');
          localStorage.removeItem('token');
        }
      },
    }
  );

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(initialState);

    const { valid, errors: validationErrors } =
      validateCreatePasswordInputs(payload);

    if (valid) {
      mutate();
    } else {
      setErrors(validationErrors);
    }
  };

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
      <Input
        labelText="Password"
        type="password"
        name="password"
        value={payload.password}
        onChange={handleChange}
        error={!isEmpty(errors.password)}
        helperText={errors.password}
      />
      <Input
        labelText="Confirm password"
        type="password"
        name="reentered_password"
        value={payload.reentered_password}
        onChange={handleChange}
        error={!isEmpty(errors.reentered_password)}
        helperText={errors.reentered_password}
      />

      <div className="flex w-full flex-col items-center gap-5 text-center">
        <Button
          size="large"
          className="w-full max-w-[450px]"
          loading={isLoading}
          onClick={handleSubmit}
        >
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

export default CreatePassword;
