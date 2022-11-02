import { Icon } from '@iconify/react';

import Avatar from '@/components/lib/Avatar';
import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import MembersTable from '@/components/shared/MembersTable';
import { members } from '@/data/members';
import { useToggle } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import Meta from '@/templates/Meta';

const Members = () => {
  const [modalIsOpen, toggleModalIsOpen] = useToggle(false);
  const [showMember, toggleShowMember] = useToggle(false);

  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Members | Follow-up Unit Lead"
          description="Unit Members of the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <div className="grid w-full gap-10">
          <div className="flex w-full flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Text variant="caption" className="font-bold">
                Show
              </Text>
              <div className="max-w-[80px]">
                <Input variant="contained" type="number" />
              </div>
              <Text variant="caption" className="font-bold">
                entries
              </Text>
            </div>

            <div className="flex items-center gap-3">
              <Text variant="caption" className="whitespace-nowrap font-bold">
                Search Member:
              </Text>
              <Input variant="contained" type="search" />
            </div>
          </div>

          <div>
            <Button
              variant="outline"
              size="medium"
              className="flex items-center gap-2"
              onClick={toggleModalIsOpen}
            >
              <Icon icon="akar-icons:plus" className="text-lg" />
              Add New Member
            </Button>
          </div>

          <MembersTable members={members} page={1} limit={10} pages={1} />
        </div>
      </TabViewLayout>

      {modalIsOpen && (
        // TODO: Make this a component of its own and handle queris there. Also pass an onClose
        // prop to be called after member has been added to unit successfully
        <Modal>
          <div className="grid w-full justify-items-center gap-3 p-5 text-center md:p-10">
            {showMember ? (
              <>
                <Avatar
                  className="h-20 w-20"
                  // image="https://loremflickr.com/100/100"
                  image={true}
                />
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
                <Heading>Add to Unit</Heading>
                <Text>Enter name or CCI ID number to find member</Text>
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
      )}
    </AuthLayout>
  );
};

export default Members;
