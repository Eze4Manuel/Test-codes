import { getRequest } from '@/utils/api/calls';

const getAllFinanceHistory = (query: string) => {
  return getRequest({
    url: `/finance-history/search-history?campus=3cece26c-e6c2-485a-9caa-9432be17b4be&unit=FOLLOW_UP_UNIT&year=2023&month=${query}`,
  });
};

export { getAllFinanceHistory };
