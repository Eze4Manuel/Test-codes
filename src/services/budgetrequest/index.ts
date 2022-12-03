import { getRequest, postRequest } from '@/utils/api/calls';

import type {
  CheckBudgetItem,
  CreateBudgetRequestPayload,
  GetBudgetRequestQueryPayload,
} from './payload';

const createBudgetRequest = (data: CreateBudgetRequestPayload) => {
  return postRequest({
    url: '/budget/create-budget',
    data,
  });
};

const getSingleBudgetRequest = (query: GetBudgetRequestQueryPayload) => {
  return getRequest({
    url: `/budget/fetch-one-budget?campus=3cece26c-e6c2-485a-9caa-9432be17b4be&unit=PASTOR_UNIT&start=${query.start}&end=${query.end}`,
  });
};
const checkBudgetItem = (query: CheckBudgetItem) => {
  return getRequest({
    url: `/budget/check-budget-item/${query}`,
  });
};

export { checkBudgetItem, createBudgetRequest, getSingleBudgetRequest };
