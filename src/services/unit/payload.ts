import type ServiceUnit from '@/types/ServiceUnit.type';

export type GetUnitMembersQuery = {
  unit?: ServiceUnit;
  page?: number;
};

export type AddMemberPayload = {
  unit: string;
  user_id: string;
};

export type RemoveMemberPayload = {
  unit: string;
  user_id: string;
};
