import { getRequest } from '@/utils/api/calls';

const getAllFinanceHistory = (query: string) => {
  return getRequest({
    url: `/finance-history/search-history?campus=25eecb0c-2dd5-44ff-bfe1-4d11a58882f6&unit=FOLLOW_UP_UNIT&year=2023&month=${query}`,
  });
};

export { getAllFinanceHistory };
