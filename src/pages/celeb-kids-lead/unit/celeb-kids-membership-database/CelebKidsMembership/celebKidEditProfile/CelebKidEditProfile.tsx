import { Icon } from '@iconify/react';
import type { FormEvent } from 'react';
import React, { useEffect, useState } from 'react';
import type { SingleValue } from 'react-select';

import Button from '@/components/lib/Button';
import Dropdown from '@/components/lib/Dropdown';
import type { Option } from '@/components/lib/Dropdown/Dropdown.props';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import type Member from '@/types/Member.type';
import { genders, groupStatuses, haveSiblings } from '@/utils/constants';
import { validateKidPersonalInfoInputs } from '@/utils/validators';
import { isEmpty } from '@/utils/validators/helpers';

const CelebKidIndividualProfile = () => {
  const [, setCelebKid] = useState<Member>();

  const kidProfileState = {
    surname: '',
    other_names: '',
    gender: '',
    dob: '',
    celeb_kid_number: '',
    group: '',
    house_address: '',
    father: '',
    mother: '',
    siblings: '',
    sibling_name: '',
  };

  const option = {
    label: '',
    value: '',
  };

  const [kid, setKid] = useState(kidProfileState);
  const [errors, setErrors] = useState(kidProfileState);
  const [groupStatus, setGroupStatus] = useState<SingleValue<Option>>(option);
  const [siblings, setSiblingStatus] = useState<SingleValue<Option>>(option);
  const [gender, setGender] = useState<SingleValue<Option>>(option);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setKid({
      ...kid,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(kidProfileState);
    const { errors: validateErrors, valid } =
      validateKidPersonalInfoInputs(kid);

    if (!valid) {
      setErrors(validateErrors);
    }
  };
  useEffect(() => {
    const data = JSON.parse(`${localStorage.getItem('member')}`);
    if (data) {
      setCelebKid(data);
    }
  }, []);

  return (
    <div>
      <div className="grid w-full gap-20">
        <div className="grid w-full gap-10">
          <div className="flex items-center gap-5">
            <div className="rounded-md bg-primary-main/10 py-3 px-5">
              <Text className="font-josefinSans font-bold">
                Kids Personal Info
              </Text>
            </div>
          </div>

          <div>
            <div>
              <div className="mt-6 grid w-full gap-10">
                <div className="flex w-full flex-col items-center gap-10 md:flex-row">
                  <div className="w-full flex-1">
                    <Input
                      labelText="Surname"
                      name="surname"
                      value={kid.surname}
                      onChange={handleChange}
                      error={!isEmpty(errors.surname)}
                      helperText={errors.surname}
                    />
                  </div>

                  <div className="w-full flex-1">
                    <Input
                      labelText="Other Names"
                      name="other_names"
                      value={kid.other_names}
                      onChange={handleChange}
                      error={!isEmpty(errors.other_names)}
                      helperText={errors.other_names}
                    />
                  </div>
                </div>

                <Dropdown
                  label="Gender"
                  value={gender}
                  options={genders}
                  onChange={(value) => {
                    setGender(value);
                    setKid({
                      ...kid,
                      gender: value?.value || '',
                    });
                  }}
                  error={!isEmpty(errors.gender)}
                  helperText={errors.gender}
                />
                <Input
                  labelText="Date of Birth"
                  name="dob"
                  type="date"
                  value={kid.dob}
                  onChange={handleChange}
                  error={!isEmpty(errors.dob)}
                  helperText={errors.dob}
                />
                <Input
                  labelText="Celeb Kid Number"
                  name="celeb_kid_number"
                  value={kid.celeb_kid_number}
                  onChange={handleChange}
                  error={!isEmpty(errors.celeb_kid_number)}
                  helperText={errors.celeb_kid_number}
                />
                <Dropdown
                  label="Group"
                  value={groupStatus}
                  options={groupStatuses}
                  onChange={(value) => {
                    setGroupStatus(value);
                    setKid({
                      ...kid,
                      group: value?.value || '',
                    });
                  }}
                  error={!isEmpty(errors.group)}
                  helperText={errors.group}
                />
                <Input
                  labelText="House address"
                  name="house_address"
                  value={kid.house_address}
                  onChange={handleChange}
                  error={!isEmpty(errors.house_address)}
                  helperText={errors.house_address}
                />
                <div className=" justify-left items-center gap-6 md:flex">
                  <div
                    className={
                      'border-grey mb-2  w-full cursor-pointer items-center  gap-0 rounded-xl border-2 bg-primary-main/10 p-3 text-center hover:border-primary-main/10 hover:bg-primary-main/10 md:w-auto'
                    }
                  >
                    <Text className="font-josefinSans font-bold">
                      Kids Family Info
                    </Text>
                  </div>
                </div>
                <Input
                  labelText="Father"
                  name="father"
                  value={kid.father}
                  onChange={handleChange}
                  error={!isEmpty(errors.father)}
                  helperText={errors.father}
                />
                <Input
                  labelText="Mother"
                  name="mother"
                  value={kid.mother}
                  onChange={handleChange}
                  error={!isEmpty(errors.mother)}
                  helperText={errors.mother}
                />
                <Dropdown
                  label="Siblings"
                  value={siblings}
                  options={haveSiblings}
                  onChange={(value) => {
                    setSiblingStatus(value);
                    setKid({
                      ...kid,
                      siblings: value?.value || '',
                    });
                  }}
                  error={!isEmpty(errors.siblings)}
                  helperText={errors.siblings}
                />
                <Input
                  labelText="Sibling Name"
                  name="sibling_name"
                  value={kid.sibling_name}
                  onChange={handleChange}
                  error={!isEmpty(errors.sibling_name)}
                  helperText={errors.sibling_name}
                />
                <div className="justify-left items-center gap-2  md:flex lg:flex-col xl:flex-row ">
                  <Icon icon={'ic:baseline-add'} />
                  <span className="text-green-400">Add Sibling</span>
                </div>
                <div className="justify-left items-center gap-2  md:flex lg:flex-col xl:flex-row ">
                  <Button
                    size="small"
                    // loading={isLoading}
                    variant="outline"
                    onClick={handleSubmit}
                    className="mb-2 flex w-14 items-center gap-1 text-center md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebKidIndividualProfile;
