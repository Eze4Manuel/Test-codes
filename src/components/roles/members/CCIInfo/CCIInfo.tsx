import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import Input from '@/components/lib/Input';

const CCIInfo = () => {
  return (
    <div className="grid w-full gap-10">
      <Input labelText="CCI ID Number" />
      <Dropdown
        label="CCI Campus"
        options={[
          {
            label: 'Ikeja, Lagos',
            value: 'ikeja',
          },
          {
            label: 'Victoria Island, Lagos',
            value: 'vi',
          },
        ]}
        onChange={() => {}}
      />
      <Dropdown
        label="MAP Group"
        options={[
          {
            label: 'Ikeja, Lagos',
            value: 'ikeja',
          },
          {
            label: 'Victoria Island, Lagos',
            value: 'vi',
          },
        ]}
        onChange={() => {}}
      />

      <Dropdown
        label="Membership Class"
        options={[
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
        ]}
        onChange={() => {}}
      />

      <Dropdown
        label="Service Unit"
        options={[
          {
            label: 'Follow-up',
            value: 'follow-up',
          },
        ]}
        onChange={() => {}}
      />

      <div>
        <Button size="large">Save Changes</Button>
      </div>
    </div>
  );
};

export default CCIInfo;
