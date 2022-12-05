import type { FC } from 'react';

import Avatar from '@/components/lib/Avatar';
import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import { useToggle } from '@/hooks';

import type AddNewCelebKidsProps from './addNewCelebKid.props';

const AddCelebKid: FC<AddNewCelebKidsProps> = ({ toggleModalIsOpen }) => {
  const [showMember, toggleShowMember] = useToggle(false);

  return (
    <Modal>
      <div className="grid w-full justify-items-center gap-3 p-5 text-center md:p-10">
        {showMember ? (
          <>
            <Avatar className="h-20 w-20" name="CK" />
            <Text variant="subheading">
              Linda Isime Yolanda | <span className="italic">CCI00110</span>
            </Text>
            <Text className="text-cci-green" variant="caption">
              View Profile
            </Text>

            <Button
              size="medium"
              className="mt-5 w-full"
              onClick={() => {
                toggleModalIsOpen();
                toggleShowMember();
              }}
            >
              Add To Unit
            </Button>
          </>
        ) : (
          <>
            <Heading>Add to Celeb Kid</Heading>
            <Text>Enter name or CCI ID number to find Celeb kid</Text>
            <Input />
            <Button
              size="medium"
              className="mt-10 w-full"
              onClick={toggleShowMember}
            >
              Search
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddCelebKid;
