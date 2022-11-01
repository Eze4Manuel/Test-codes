import { getRequest } from '@/utils/api/calls';

const getAllWorkers = () => {
  return getRequest({
    url: `/attendance/fetch-total-workers`,
  });
};

export default getAllWorkers;
