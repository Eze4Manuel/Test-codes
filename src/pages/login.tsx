import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';

import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import { useAppDispatch } from '@/hooks';
import OnboardingLayout from '@/layouts/OnboardingLayout';
import { login } from '@/services/auth';
import { setUserData } from '@/store/slices/userSlice';
import Meta from '@/templates/Meta';
import { processRole } from '@/utils/misc';
import { processResponse } from '@/utils/response/processResponse';
import { validateLoginInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

const initialsState = {
  email_address: '',
  password: '',
};

export const Login = () => {
  const dispatch = useAppDispatch();
  // const { user } = useAppSelector((state) => state.user);
  const [payload, setPayload] = useState(initialsState);
  const [errors, setErrors] = useState(initialsState);
  const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     router.push(`/${processRole(user?.role || '').urlForm}/profile`);
  //   }
  // }, [user]);

  const { mutate, isLoading } = useMutation(login, {
    onSuccess(response) {
      const data = processResponse(response);

      if (data?.user) {
        const userData = {
          id: data?.user?.id,
          ccid: data?.user?.ccid,
          email_address: data?.user?.email_address,
          first_name: data?.user?.first_name,
          last_name: data?.user?.last_name,
          gender: data?.user?.gender,
          profile_picture: data?.user?.profile_picture,
          role: data?.user?.role,
        };

        localStorage.setItem('token', response?.token);
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(setUserData(userData));
        router.push(`/${processRole(data?.user?.role || '').urlForm}/profile`);
      }
    },
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(initialsState);
    const { errors: validateErrors, valid } = validateLoginInputs(payload);

    if (valid) {
      mutate(payload);
    } else {
      setErrors(validateErrors);
    }
  };

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
      <Input
        labelText="E-mail address"
        type="email"
        name="email_address"
        value={payload.email_address}
        onChange={handleChange}
        error={!isEmpty(errors.email_address)}
        helperText={errors.email_address}
      />
      <Input
        labelText="Password"
        type="password"
        name="password"
        value={payload.password}
        onChange={handleChange}
        error={!isEmpty(errors.password)}
        helperText={errors.password}
      />

      <div className="flex w-full flex-col items-center gap-5 text-center">
        <Button
          size="large"
          className="w-full max-w-[450px]"
          onClick={handleSubmit}
          loading={isLoading}
        >
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
