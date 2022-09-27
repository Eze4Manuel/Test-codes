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
