import { getRequest } from '@/utils/api/calls';

const getAllAttendance = () => {
  return getRequest({
    url: '/attendance/fetch-total-attendance?month=OCTOBER&time_range=PAST_WEEK&service_type=MIDWEEK&campus=CAMPUS_TWO',
  });
};

export { getAllAttendance };
