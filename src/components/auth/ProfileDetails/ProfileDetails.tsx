import type { FC } from 'react';

import Text from '@/components/lib/Text';

import type ProfileDetailsProps from './ProfileDetails.props';

const ProfileDetails: FC<ProfileDetailsProps> = ({
  membershipClass,
  serviceUnit,
}) => {
  return (
    <div className="flex w-full items-center justify-center divide-x divide-cci-grey-dim rounded-md border-2 border-cci-grey-dim/20 bg-[#fafafa] p-3 md:p-5">
      <div className="flex flex-col items-center gap-1 px-5 py-3 text-center lg:px-10 lg:py-5">
        <Text className="font-josefinSans text-lg font-bold lg:text-xl">
          Membership Class
        </Text>
        <Text className="uppercase text-[#00b232]">
          {membershipClass ? 'Yes' : 'No'}
        </Text>
      </div>

      <div className="flex flex-col items-center gap-1 px-5 py-3 text-center lg:px-10 lg:py-5">
        <Text className="font-josefinSans text-lg font-bold lg:text-xl">
          Service Unit
        </Text>
        <Text className="uppercase text-[#00b232]">{serviceUnit}</Text>
      </div>
    </div>
  );
};

export default ProfileDetails;
