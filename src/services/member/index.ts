import { getRequest, patchRequest } from '@/utils/api/calls';

import type { FetchUserQuery, UserPayload } from './payload';

const fetchAllUsers = () => {
  return getRequest({
    url: '/user/fetch-all-users',
  });
};

const fetchUser = (query: FetchUserQuery) => {
  return getRequest({
    url: `/user/fetch-profile?search_param_type=${query.search_param_type}&search_param=${query.search_param}`,
  });
};

const updateUser = ({ data, id }: { data: UserPayload; id: string }) => {
  return patchRequest({
    url: `/user/update-profile/${id}`,
    data,
  });
};

export { fetchAllUsers, fetchUser, updateUser };
