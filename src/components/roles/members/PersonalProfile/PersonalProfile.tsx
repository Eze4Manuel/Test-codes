import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import Input from '@/components/lib/Input';

const PersonalProfile = () => {
  return (
    <div className="grid w-full gap-10">
      <div className="flex w-full items-center gap-10">
        <div className="flex-1">
          <Input labelText="Surname" />
        </div>

        <div className="flex-1">
          <Input labelText="Other names" />
        </div>
      </div>

      <Dropdown
        label="Gender"
        options={[
          {
            label: 'Male',
            value: 'm',
          },
          {
            label: 'Female',
            value: 'f',
          },
        ]}
        onChange={() => {}}
      />

      <Input labelText="Date of Birth" type="date" />
      <Input labelText="Phone Number" />
      <Input labelText="E-mail address" type="email" />
      <Input labelText="House address" />
      <Dropdown
        label="Marital Status"
        options={[
          {
            label: 'Married',
            value: 'married',
          },
          {
            label: 'Single',
            value: 'single',
          },
        ]}
        onChange={() => {}}
      />
      <Input labelText="No. of children (if any)" type="number" />

      <div>
        <Button size="large">Save Changes</Button>
      </div>
    </div>
  );
};

export default PersonalProfile;
