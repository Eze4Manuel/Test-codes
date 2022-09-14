import type Member from '@/types/Member.type';

export default interface MembersTableProps {
  members: Member[];
  page: number;
  pages: number;
  limit: number;
}
