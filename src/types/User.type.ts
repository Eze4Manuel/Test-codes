import type RoleName from './Role.type';
import type ServiceUnit from './ServiceUnit.type';

interface IUser {
  id: string;
  active?: boolean;
  ccid?: string;
  created_at?: string;
  dob?: string;
  email_address?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  home_address?: string;
  is_active?: boolean;
  marital_status?: string;
  membership_class?: boolean;
  phone_number?: string;
  profile_picture?: string;
  role?: RoleName;
  campusId?: string;
  unit?: ServiceUnit;
}

export default IUser;
