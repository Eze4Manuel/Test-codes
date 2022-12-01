import { isEmail, isEmpty, isValid } from './helpers';

export const validatePersonalInfoInputs = ({
  first_name,
  last_name,
  email_address,
  phone_number,
  home_address,
  marital_status,
  dob,
  gender,
}: {
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  home_address: string;
  marital_status: string;
  dob: string;
  gender: string;
}) => {
  const errors = {
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    home_address: '',
    marital_status: '',
    dob: '',
    gender: '',
  };

  if (isEmpty(email_address)) errors.email_address = 'Email cannot be empty';
  else if (!isEmail(email_address))
    errors.email_address = 'Invalid email address';

  if (isEmpty(first_name)) errors.first_name = 'First Name cannot be empty';

  if (isEmpty(last_name)) errors.last_name = 'Last Name cannot be empty';

  if (isEmpty(phone_number))
    errors.phone_number = 'Phone Number cannot be empty';

  if (isEmpty(home_address))
    errors.home_address = 'Home Address cannot be empty';

  if (isEmpty(marital_status))
    errors.marital_status = 'Marital Status cannot be empty';

  if (isEmpty(dob)) errors.dob = 'Date of Birth cannot be empty';

  if (isEmpty(gender)) errors.gender = 'Gender cannot be empty';

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateKidPersonalInfoInputs = ({
  surname,
  other_names,
  gender,
  dob,
  celeb_kid_number,
  group,
  house_address,
  father,
  mother,
}: {
  surname: string;
  other_names: string;
  gender: string;
  dob: string;
  celeb_kid_number: string;
  group: string;
  house_address: string;
  father: string;
  mother: string;
  siblings: string;
  sibling_name: string;
}) => {
  const errors = {
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

  if (isEmpty(surname)) errors.surname = 'Surname cannot be empty';
  if (isEmpty(other_names)) errors.other_names = 'Other Names cannot be empty';
  if (isEmpty(gender)) errors.gender = 'Gender cannot be empty';
  if (isEmpty(dob)) errors.dob = 'Date of Birth cannot be empty';
  if (isEmpty(group)) errors.group = 'Group cannot be empty';
  if (isEmpty(celeb_kid_number))
    errors.celeb_kid_number = 'Celeb Kid Number cannot be empty';
  if (isEmpty(house_address))
    errors.house_address = 'House Address cannot be empty';
  if (isEmpty(father)) errors.father = 'Father cannot be empty';
  if (isEmpty(mother)) errors.mother = 'Mother cannot be empty';

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateCCIInfoInputs = ({
  ccid,
  membership_class,
}: {
  ccid: string;
  membership_class: string;
}) => {
  const errors = {
    ccid: '',
    membership_class: '',
  };

  if (isEmpty(ccid)) errors.ccid = 'CCID cannot be empty';

  if (isEmpty(membership_class))
    errors.membership_class = 'Please select an option';

  return {
    valid: isValid(errors),
    errors,
  };
};
