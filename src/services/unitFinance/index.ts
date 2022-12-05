import { getRequest } from '@/utils/api/calls';

import type { GetFinanceHistoryPayload } from './payload';

const getAllFinanceHistory = (query: GetFinanceHistoryPayload) => {
  return getRequest({
    url: `/finance-history/search-history?campus=3cece26c-e6c2-485a-9caa-9432be17b4be&unit=${query.unit}&year=2023&month=${query.month}`,
  });
};

export { getAllFinanceHistory };
