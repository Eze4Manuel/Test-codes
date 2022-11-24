import { getRequest } from '@/utils/api/calls';

const getAllWorkers = () => {
  return getRequest({
    url: `/unit-report/fetch-all-reports`,
  });
};

export default getAllWorkers;
