import type KidsAttendanceTableType from '@/types/KidsAttendanceTableType.type';

export default interface KidsAttendanceTableProps {
  kidsAttendanceTableData: KidsAttendanceTableType[];
  page: number;
  pages: number;
  limit: number;
  searchValue?: string | undefined;
}
