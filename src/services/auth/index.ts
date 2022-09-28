import { postRequest } from '@/utils/api/calls';

import type {
  CreatePasswordPayload,
  LoginPayload,
  RegisterPayload,
} from './payload';

const login = (data: LoginPayload) => {
  return postRequest({
    url: '/user/login',
    data,
  });
};

const createMemberAccount = (data: RegisterPayload) => {
  return postRequest({
    url: '/user/create-member-account',
    data,
  });
};

const createPassword = (id: string, data: CreatePasswordPayload) => {
  return postRequest({
    url: `/user/create-password/${id}`,
    data,
  });
};

export { createMemberAccount, createPassword, login };
