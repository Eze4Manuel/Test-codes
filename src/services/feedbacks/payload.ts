export interface MemberFeedbackPayload {
  satisfaction: string | null;
  reason: string;
}

export interface ServiceUnitFeedbackPayload {
  send_to: string;
  service_experience: string;
  suggestions: string;
}
