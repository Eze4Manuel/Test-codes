import type CelebKidsAndParentsTableType from '@/types/CelebKidsAndParentsTableType.type';

export default interface CelebKidsAndParentsTableProps {
  celebKidsAndParentsTableData: CelebKidsAndParentsTableType[];
  page: number;
  pages: number;
  limit: number;
  searchValue?: string | undefined;
}
