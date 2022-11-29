import type Member from '@/types/Member.type';

export default interface MembersTableProps {
  members: Member[];
  page: number;
  setPage?: (page: number) => void;
  pages: number;
  limit: number;
  searchValue?: string | undefined;
}
