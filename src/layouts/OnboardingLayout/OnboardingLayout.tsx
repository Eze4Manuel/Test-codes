import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';

import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import { useAppSelector, useCheckAuth } from '@/hooks';
import { processRole } from '@/utils/misc';

import type OnboardingLayoutProps from './OnboardingLayout.props';

const OnboardingLayout: FC<PropsWithChildren<OnboardingLayoutProps>> = ({
  meta,
  hideBackButton = false,
  heading,
  subheading,
  children,
}) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const { isAuthenticated } = useCheckAuth({
    disableRedirect: true,
  });
  const { urlForm } = processRole(user?.role, user?.unit);

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/${urlForm}/profile`);
    }
  }, [isAuthenticated]);

  return (
    <>
      {meta}

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-3 px-6 py-10 lg:px-10">
        <div className="w-full">
          <button
            onClick={() => router.back()}
            disabled={hideBackButton}
            className="flex items-center"
          >
            {!hideBackButton && (
              <Icon
                icon="material-symbols:arrow-back-rounded"
                className="text-2xl text-cci-grey lg:text-3xl"
              />
            )}
          </button>
        </div>

        <figure className="relative mt-5 flex aspect-[2/1] w-[150px] p-0 lg:w-[180px]">
          <Image
            layout="fill"
            className="h-full w-full object-cover"
            src="/assets/icons/Logo.svg"
            alt="CCI Logo"
          />
        </figure>

        {heading && (
          <Heading className="max-w-[600px] text-center">{heading}</Heading>
        )}

        {subheading && (
          <Text
            className="max-w-[590px] text-center text-cci-grey"
            variant="body2"
          >
            {subheading}
          </Text>
        )}

        <div className="mt-10 flex w-full max-w-[600px] flex-col items-center gap-10">
          {children}
        </div>
      </main>
    </>
  );
};

export default OnboardingLayout;
