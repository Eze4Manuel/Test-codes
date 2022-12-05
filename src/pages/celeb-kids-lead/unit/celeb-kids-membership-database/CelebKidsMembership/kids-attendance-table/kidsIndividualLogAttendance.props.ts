import type KidsIndividualAttendanceTableType from '@/types/KidsIndividualAttendanceTableType.type';

export default interface KidsIndividualAttendanceProps {
  kidsIndividualLogAttendanceData: KidsIndividualAttendanceTableType[];
  page: number;
  pages: number;
  limit: number;
  searchValue?: string | undefined;
}
