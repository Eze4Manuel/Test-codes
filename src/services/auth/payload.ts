export type LoginPayload = {
  email_address: string;
  password: string;
};

export type RegisterPayload = {
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  phone_number: string;
  email_address: string;
  home_address: string;
  marital_status: string;
};

export type CreatePasswordPayload = {
  password: string;
  reentered_password: string;
};
