import { postRequest } from '@/utils/api/calls';

import type { LoginPayload } from './payload';

const login = (data: LoginPayload) => {
  return postRequest({
    url: '/user/login',
    data,
  });
};

const createMemberAccount = (data: LoginPayload) => {
  return postRequest({
    url: '/user/create-member-account',
    data,
  });
};

export { createMemberAccount, login };
