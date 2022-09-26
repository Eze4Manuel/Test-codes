import { getRequest } from '@/utils/api/calls';

const fetchAllUsers = () => {
  return getRequest({
    url: '/user/fetch-all-users',
  });
};

export { fetchAllUsers };
