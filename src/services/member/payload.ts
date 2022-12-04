export type FetchUserQuery = {
  search_type?: string;
  search_option?: string | string[] | undefined;
};

export type UserPayload = {
  first_name?: string;
  last_name?: string;
  email_address?: string;
  phone_number?: string;
  home_address?: string;
  marital_status?: string;
  dob?: string;
  gender?: string;
  ccid?: string;
  membership_class?: string;
};
