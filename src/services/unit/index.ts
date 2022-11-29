import { getRequest, postRequest } from '@/utils/api/calls';

import type {
  AddMemberPayload,
  GetUnitMembersQuery,
  RemoveMemberPayload,
} from './payload';

const getUnitMembers = ({ unit, page = 1 }: GetUnitMembersQuery) => {
  return getRequest({
    url: `/service-unit/unit-members?page=${page}${
      unit ? `&unit=${unit}` : ''
    }`,
  });
};

const addMemberToUnit = (data: AddMemberPayload) => {
  return postRequest({
    url: '/service-unit/add-member',
    data,
  });
};

const removeMemberFromUnit = (data: RemoveMemberPayload) => {
  return postRequest({
    url: '/service-unit/remove-member',
    data,
  });
};

export { addMemberToUnit, getUnitMembers, removeMemberFromUnit };
