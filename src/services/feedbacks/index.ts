import { postRequest } from '@/utils/api/calls';

import type {
  MemberFeedbackPayload,
  ServiceUnitFeedbackPayload,
} from './payload';

const memberFeedback = (data: MemberFeedbackPayload) => {
  return postRequest({
    url: '/feedback/create/member-feedback',
    data,
  });
};

const serviceUnitFeedback = (data: ServiceUnitFeedbackPayload) => {
  return postRequest({
    url: '/feedback/create/unit-lead-feedback',
    data,
  });
};
export { memberFeedback, serviceUnitFeedback };
