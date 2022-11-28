import type { AttendancePayload } from '@/services/attendance/payload';

export interface AttendanceCardProps {
  data?: AttendancePayload;
  loading?: boolean;
}

export interface AttendanceCardExtraProps {
  donutData?: AttendancePayload;
}
