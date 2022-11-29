import ServiceUnit from '@/types/ServiceUnit.type';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const genders = [
  {
    label: 'Male',
    value: 'MALE',
  },
  {
    label: 'Female',
    value: 'FEMALE',
  },
];

export const maritalStatuses = [
  {
    label: 'Married',
    value: 'MARRIED',
  },
  {
    label: 'Single',
    value: 'SINGLE',
  },
];

export const CCICampuses = [
  {
    label: 'Ikeja, Lagos',
    value: 'ikeja',
  },
  {
    label: 'Victoria Island, Lagos',
    value: 'vi',
  },
];

export const mapGroups = [
  {
    label: 'Ikeja, Lagos',
    value: 'ikeja',
  },
  {
    label: 'Victoria Island, Lagos',
    value: 'vi',
  },
];

export const membershipClasses = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
];

export const serviceUnits = [
  {
    label: 'Follow-up',
    value: 'follow-up',
  },
];

export const cciCampuses = [
  { value: 'CCI Global', label: 'CCI Global' },
  { value: 'CCI Ikeja', label: 'CCI Ikeja' },
];

export const allUnits = [
  { name: 'Pastors', size: 600, color: '#101318' },
  { name: 'Protocol', size: 600, color: '#B20000' },
  { name: 'Celeb Kids', size: 600, color: '#686868' },
  { name: 'Choir', size: 500, color: '#D37028' },
  { name: 'Media', size: 500, color: ' #007DB2' },
  { name: 'Ambience', size: 500, color: '#00B232' },
  { name: 'Follow-up', size: 500, color: '#B17DDA' },
];

export const allUnitsWithValue = [
  { label: 'Pastors', value: 'Pastors' },
  { label: 'Protocol', value: 'Protocol' },
  { label: 'Celeb Kids', value: 'Celeb Kids' },
  { label: 'Choir', value: 'Choir' },
  { label: 'Media', value: 'Media' },
  { label: 'Media', value: 'Media' },
  { label: 'Follow-up', value: 'Follow-up' },
];

export const entries = [
  {
    entry: 10,
    value: 10,
  },
  {
    entry: 20,
    value: 20,
  },
  {
    entry: 50,
    value: 50,
  },
];

export const dummyUnitReports = [
  {
    index: 0,
    date: 'April 1 - April 7 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 1,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 2,
    date: 'April 1 - April 7 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 3,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 4,
    date: 'April 1 - April 7 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 5,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 6,
    date: 'April 1 - April 7 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 7,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 8,
    date: 'April 1 - April 7 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'Write Report',
  },
  {
    index: 9,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },

  {
    index: 10,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 11,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 12,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 13,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 14,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 15,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 16,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
  {
    index: 17,
    date: 'April 7 - April 14 2022',
    report: 'The team onboarded 20 new members, profile...',
    action: 'View Report',
  },
];

export const dummyMeetingReports = [
  {
    index: 0,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },
  {
    index: 1,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },
  {
    index: 2,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },

  {
    index: 3,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },

  {
    index: 4,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },

  {
    index: 5,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },

  {
    index: 6,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },

  {
    index: 7,
    report:
      'Meeting took place on the 5th of June with all 7 members of the follow-u...',
    action: 'View reports',
  },
];

export const dummyBudgetRequestTable = [
  { name: 'Petrol', cost: 50000, POP: 'N/A' },
  { name: 'Diesel', cost: 70000, POP: 'N/A' },
  { name: 'SMS Charges', cost: 15000, POP: 'N/A' },
];

export const fixedPageItems = [
  {
    value: 10,
    text: 10,
  },
  {
    value: 20,
    text: 20,
  },
  {
    value: 25,
    text: 25,
  },
  {
    value: 50,
    text: 50,
  },
];

export const filterOptions = [
  { value: 'Show all', label: 'Show all' },
  { value: 'Workers only', label: 'Workers only' },
  { value: 'Members only', label: 'Members only' },
  { value: 'Children only', label: 'Children only' },
];

export const createNewMemberTab = [
  'Create CCI member profile',
  'Upload Excel Spreedsheet',
];

export const units: {
  value: ServiceUnit;
  label: string;
}[] = [
  {
    value: ServiceUnit.AMBIENCE_UNIT,
    label: 'Ambience Unit',
  },
  {
    value: ServiceUnit.CELEB_KIDS_UNIT,
    label: 'Celeb Kids Unit',
  },
  {
    value: ServiceUnit.COMMS_AND_CULTURE_UNIT,
    label: 'Communications and Culture Unit',
  },
  {
    value: ServiceUnit.CREATIVE_UNIT,
    label: 'Crative Unit',
  },
  {
    value: ServiceUnit.FOLLOW_UP_UNIT,
    label: 'Follow-up Unit',
  },
  {
    value: ServiceUnit.MEDIA_AND_TECHNICAL_UNIT,
    label: 'Media and Technical Unit',
  },
  {
    value: ServiceUnit.OUTBURST_MUSIC_GROUP_UNIT,
    label: 'Outburst Music Group Unit',
  },
  {
    value: ServiceUnit.PASTOR_UNIT,
    label: 'Pastor Unit',
  },
  {
    value: ServiceUnit.PHOTOGRAPHY_AND_STORYTELLING_UNIT,
    label: 'Photography and Story Telling Unit',
  },
  {
    value: ServiceUnit.PROTOCOL_UNIT,
    label: 'Protocol Unit',
  },
  {
    value: ServiceUnit.SANCTUARY_KEEPERS_UNIT,
    label: 'Sanctuary Keepers Unit',
  },
  {
    value: ServiceUnit.SOCIAL_MEDIA_UNIT,
    label: 'Social Media Unit',
  },
];
