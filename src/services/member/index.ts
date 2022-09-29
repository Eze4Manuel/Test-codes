import { getRequest, patchRequest } from '@/utils/api/calls';

import type { FetchUserQuery, UserPayload } from './payload';

const fetchAllUsers = () => {
  return getRequest({
    url: '/user/fetch-all-users',
  });
};

const fetchUser = (query: FetchUserQuery) => {
  return getRequest({
    url: `/user/fetch-profile?search_type=${query.search_type}&search_option=${query.search_option}`,
  });
};

const updateUser = (data: UserPayload) => {
  return patchRequest({
    url: '/user/update-profile',
    data,
  });
};

export { fetchAllUsers, fetchUser, updateUser };
