import type RoleName from './Role.type';
import type ServiceUnit from './ServiceUnit.type';

interface Member {
  id: string;
  first_name: string;
  last_name: string;
  ccid?: string;
  phone_number?: string;
  email_address?: string;
  home_address?: string;
  marital_status?: string;
  unit?: ServiceUnit;
  membership_class?: boolean;
  role?: RoleName;
  dob?: string;
  gender?: string;
}

export default Member;
