import Link from 'next/link';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import Meta from '@/templates/Meta';

const Index = () => {
  return (
    <>
      <Meta title="Welcome to CCI CGOP" description="Welcome to the CCI CGOP" />
      <main className="relative flex h-screen w-full flex-col items-center justify-center gap-10 text-center">
        <Heading variant="h1">Hello, Welcome to CCI CGOP</Heading>
        <Text variant="body2">This is supposed to be the welcome page.</Text>

        <Link href="/member/profile">
          <Button size="medium" variant="outline">
            Click Me!
          </Button>
        </Link>
      </main>
    </>
  );
};

export default Index;
