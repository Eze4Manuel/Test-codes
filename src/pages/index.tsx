import { useState } from 'react';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import Meta from '@/templates/Meta';
// import { Option } from '@/components/lib/Dropdown/Dropdown.props';

const Index = () => {
  const [name, setName] = useState('');

  const maritalStatus = [
    { value: 'married', label: 'Married' },
    { value: 'single', label: 'Single' },
    { value: 'divorced', label: 'Divorced' },
  ];

  const sex = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  const [selectedOptionMS, setSelectedOptionMS] = useState({
    value: '',
    label: 'Marital Status',
  });

  const [selectedOptionSex, setSelectedOptionSex] = useState({
    value: '',
    label: 'Gender',
  });

  console.log(selectedOptionMS, selectedOptionSex);

  return (
    <>
      <Meta title="Welcome to CCI CGOP" description="Welcome to the CCI CGOP" />
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
              variant="bold"
              textOpacity="normal"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>

          <div className="my-6">
            <Dropdown
              label="Marital Status"
              options={maritalStatus}
              defaultValue={selectedOptionMS}
              onChange={(selectedOption) =>
                setSelectedOptionMS(selectedOption as Option)
              }
            />
          </div>

          <div className="my-6">
            <Dropdown
              label="Gender"
              options={sex}
              defaultValue={selectedOptionSex}
              onChange={(selectedOption) =>
                setSelectedOptionSex(selectedOption as Option)
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
