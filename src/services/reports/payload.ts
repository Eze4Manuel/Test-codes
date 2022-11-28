type GetAllReportsQuery = {
  campusId: string;
  unit: string;
};

type UpdateReportType = {
  report: string;
  start_date: string;
  end_date: string;
};

type CreateReportType = {
  report: string;
  start: string;
  campus: string;
  unit: string;
  end: string;
};

type CreateMeetingReportType = {
  report: string;
  date: string | undefined;
  campus: string;
  unit: string;
};

type UpdateMeetingReportType = {
  report: string;
  date: string;
};

export type {
  CreateMeetingReportType,
  CreateReportType,
  GetAllReportsQuery,
  UpdateMeetingReportType,
  UpdateReportType,
};
