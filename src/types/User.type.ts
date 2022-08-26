interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  account_type: string;
  dob?: string;
  phone?: string;
  gender?: string;
  email: string;
  remember_token?: string;
  is_activated: boolean;
}

export default IUser;
