import { useState } from 'react';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
// import Meta from '@/templates/Meta';

const Index = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Select an option');
  const [maritalStatus, setMaritalStatus] = useState('Select an option');

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.target as HTMLLIElement;
    if (textContent !== null) {
      setGender(textContent);
    }
  };

  const handleClick2 = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.target as HTMLLIElement;
    if (textContent !== null) {
      setMaritalStatus(textContent);
    }
  };

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center gap-10">
      <Heading variant="h1">Hello, Welcome to CCI CGOP</Heading>
      <Text variant="body2">This is supposed to be the welcome page.</Text>
      <Button size="large">Chike</Button>

      <div className="w-full px-4 md:w-[80%] lg:w-[70%] xl:w-[50%]">
        <div className="my-6">
          <Input
            type={'text'}
            labelText={'Name'}
            name={'name'}
            required={false}
            value={name}
            variant="normal"
            textOpacity="normal"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="my-6">
          <Dropdown
            currentValue={gender}
            list={['Select an option', 'Male', 'Female']}
            labelText="Gender"
            onClick={(e) => handleClick(e)}
          />
        </div>

        <div className="my-6">
          <Dropdown
            currentValue={maritalStatus}
            list={['Select an option', 'Married', 'Single']}
            labelText="Marital Status"
            onClick={(e) => handleClick2(e)}
          />
        </div>
      </div>
    </main>
    // =======
    //     <>
    //       <Meta title="Welcome to CCI CGOP" description="Welcome to the CCI CGOP" />
    //       <main className="relative flex h-screen w-full flex-col items-center justify-center gap-10 text-center">
    //         <Heading variant="h1">Hello, Welcome to CCI CGOP</Heading>
    //         <Text variant="body2">This is supposed to be the welcome page.</Text>

    //         <Link href="/member/profile">
    //           <Button size="medium" variant="outline">
    //             Click Me!
    //           </Button>
    //         </Link>
    //       </main>
    //     </>
    // >>>>>>> dc8310237e17641090bf971cb7e25a34a0a6e977
  );
};

export default Index;
