/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Dropdown3 from '@/components/lib/Dropdown3';
import Input from '@/components/lib/Input';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import memberProfile from '@/layouts/TabViewLayout/leadPastor/memberProfileTabs';
import Meta from '@/templates/Meta';
import { allUnitsWithValue } from '@/utils/constants';

const MemberProfile = () => {
  return (
    <AuthLayout
      meta={
        <Meta
          title="Lead Pastor | Members Database"
          description="Information about all CCI members"
        />
      }
    >
      <TabViewLayout
        tabs={memberProfile}
        rightComponent={
          <Dropdown3
            options={allUnitsWithValue}
            defaultValue={'Appoint as unit lead'}
          />
        }
      >
        <div className="grid w-full gap-10">
          <div className="h-[50px] w-[200px] bg-cci-red/20 px-10 py-3 text-center font-bold text-cci-black">
            Personal Info
          </div>

          <div className="flex w-full flex-col items-center gap-10 md:flex-row">
            <div className="w-full flex-1">
              <Input labelText="First Name" name="first_name" disabled={true} />
            </div>

            <div className="w-full flex-1">
              <Input labelText="Last Name" name="last_name" disabled={true} />
            </div>
          </div>

          <Input labelText="Gender" name="gender" type="text" disabled={true} />

          <Input
            labelText="Date of Birth"
            name="dob"
            type="date"
            disabled={true}
          />

          <Input labelText="Phone Number" name="phone_number" disabled={true} />

          <Input
            labelText="E-mail address"
            name="email_address"
            type="email"
            disabled={true}
          />

          <Input
            labelText="House address"
            name="home_address"
            disabled={true}
          />

          <Input
            labelText="Marital Status"
            name="marital_status"
            type="text"
            disabled={true}
          />

          <Input
            labelText="No. of children (if any)"
            type="number"
            value="0"
            disabled={true}
          />
        </div>

        <div className="mt-12 grid w-full gap-10">
          <div className="h-[50px] w-[200px] bg-cci-red/20 px-10 py-3 text-center font-bold text-cci-black">
            CCI Info
          </div>

          <Input
            labelText="CCI Campus"
            name="dob"
            type="date"
            disabled={true}
          />

          <Input
            labelText="Map Group"
            name="map_group"
            type="text"
            disabled={true}
          />

          <Input
            labelText="Membership Class"
            name="membership_class"
            type="text"
            disabled={true}
          />
        </div>
      </TabViewLayout>
    </AuthLayout>
  );
};

export default MemberProfile;
