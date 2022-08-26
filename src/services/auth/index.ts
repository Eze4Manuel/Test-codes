import { postRequest } from '@/utils/api/calls';

import type { LoginPayload } from './payload';

const login = (data: LoginPayload) => {
  return postRequest({
    url: '/login',
    data,
  });
};

export { login };
