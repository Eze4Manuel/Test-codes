import { isEmail, isEmpty, isValid } from './helpers';

export const validateLoginInputs = ({
  email_address,
  password,
}: {
  email_address: string;
  password: string;
}) => {
  const errors = {
    email_address: '',
    password: '',
  };

  if (isEmpty(email_address)) errors.email_address = 'Email cannot be empty';
  else if (!isEmail(email_address))
    errors.email_address = 'Invalid email address';

  if (isEmpty(password)) errors.password = 'Password cannot be empty';

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateRegisterInputs = ({
  first_name,
  last_name,
  dob,
  gender,
  phone_number,
  email_address,
  home_address,
  marital_status,
}: {
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  phone_number: string;
  email_address: string;
  home_address: string;
  marital_status: string;
}) => {
  const errors = {
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    phone_number: '',
    email_address: '',
    home_address: '',
    marital_status: '',
  };

  if (isEmpty(first_name)) errors.first_name = 'First Name cannot be empty';
  if (isEmpty(last_name)) errors.last_name = 'Last Name cannot be empty';
  if (isEmpty(dob)) errors.dob = 'Date of Birth cannot be empty';
  if (isEmpty(gender)) errors.gender = 'Gender cannot be empty';
  if (isEmpty(phone_number))
    errors.phone_number = 'Phone Number cannot be empty';
  if (isEmpty(home_address))
    errors.home_address = 'Home Addresscannot be empty';
  if (isEmpty(marital_status))
    errors.marital_status = 'Marital Status cannot be empty';

  if (isEmpty(email_address)) errors.email_address = 'Email cannot be empty';
  else if (!isEmail(email_address))
    errors.email_address = 'Invalid email address';

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateCreatePasswordInputs = ({
  reentered_password,
  password,
}: {
  password: string;
  reentered_password: string;
}) => {
  const errors = {
    password: '',
    reentered_password: '',
  };

  if (isEmpty(password)) errors.password = 'Password cannot be empty';
  if (isEmpty(reentered_password))
    errors.reentered_password = 'Password cannot be empty';
  else if (reentered_password !== password)
    errors.reentered_password = 'Passwords do not match';

  return {
    valid: isValid(errors),
    errors,
  };
};
