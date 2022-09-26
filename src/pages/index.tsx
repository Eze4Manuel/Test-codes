import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import Meta from '@/templates/Meta';

import logo from '../../public/assets/images/logo-mobile.png';
import HomeBg from '../layouts/Home/index';

const Index = () => {
  return (
    <>
      <Meta title="Welcome to CCI CGOP" description="Welcome to the CCI CGOP" />
      <HomeBg>
        <section className="absolute top-1/2 left-1/2 mx-auto w-[90%] -translate-y-1/2 -translate-x-1/2 text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
          <div className="pb-8 text-center">
            <Image src={logo} alt="logo" priority />
          </div>

          <div className="mx-auto grid w-max grid-cols-3">
            <Heading className="col-span-3 mt-2 text-[2.125em] font-semibold">
              Celebration Church{' '}
            </Heading>
            <Heading className="col-start-2 col-end-4 -mt-3 text-right text-[20px] font-normal text-cci-black-dim ">
              Membership Portal
            </Heading>
          </div>

          <Text className="my-14 text-center text-[0.875em] font-medium">
            This portal is exclusively for members of Celebration Church
            International (CCI).
          </Text>

          <Link href="/login">
            <Button
              className="my-4 block w-full md:mx-auto md:w-[60%] lg:w-[50%] xl:w-[30%]"
              size="medium"
            >
              Log in to your account
            </Button>
          </Link>
          <Button
            className="my-4 block w-full md:mx-auto md:w-[60%] lg:w-[50%] xl:w-[30%]"
            variant="outline"
            size="medium"
          >
            Request for a member account
          </Button>

          <Text className="mt-12 text-center text-[0.875em] font-medium">
            Click <span className="font-black">HERE</span> to view the official
            website of Celebration Church.
          </Text>
        </section>
      </HomeBg>
    </>
  );
};

export default Index;
