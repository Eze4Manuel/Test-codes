import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from '@/utils/api/calls';

import type {
  CreateMeetingReportType,
  CreateReportType,
  GetAllReportsQuery,
  UpdateMeetingReportType,
  UpdateReportType,
} from './payload';

const getAllUnitReports = (query: GetAllReportsQuery) => {
  return getRequest({
    url: `/unit-report/fetch-all-reports?campus=${query?.campusId}&unit=${query?.unit}`,
  });
};

const getUnitReportById = (id: string | string[] | undefined) => {
  return getRequest({
    url: `/unit-report/fetch-report/${id}`,
  });
};

const createReport = (data: CreateReportType) => {
  return postRequest({
    url: 'unit-report/create-report',
    data,
  });
};

const updateReport = (
  id: string | string[] | undefined,
  data: UpdateReportType
) => {
  return patchRequest({
    url: `unit-report/update-report/${id}`,
    data,
  });
};

const deleteMeetingReport = (id: string | string[] | undefined) => {
  return deleteRequest({
    url: `/meeting-report/delete-report/${id}`,
  });
};

const getAllMeetingReport = (query: GetAllReportsQuery) => {
  return getRequest({
    url: `/meeting-report/fetch-all-reports?campus=${query?.campusId}&unit=${query?.unit}`,
  });
};

const getMeetingReportById = (id: string | string[] | undefined) => {
  return getRequest({
    url: `/meeting-report/fetch-report/${id}`,
  });
};

const createUnitMeetingReport = (data: CreateMeetingReportType) => {
  return postRequest({
    url: '/meeting-report/create-report',
    data,
  });
};

const updateMeetingReport = (
  id: string | string[] | undefined,
  data: UpdateMeetingReportType
) => {
  return patchRequest({
    url: `/meeting-report/update-report/${id}`,
    data,
  });
};

export {
  createReport,
  createUnitMeetingReport,
  deleteMeetingReport,
  getAllMeetingReport,
  getAllUnitReports,
  getMeetingReportById,
  getUnitReportById,
  updateMeetingReport,
  updateReport,
};
