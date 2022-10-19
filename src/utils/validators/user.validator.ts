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
