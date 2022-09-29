export const processRole: (role: string) => {
  urlForm: string;
  longForm: string;
} = (role) => {
  switch (role) {
    case 'MEMBER':
      return {
        urlForm: 'member',
        longForm: 'Member',
      };

    case 'ADMIN':
      return {
        urlForm: 'follow-up-lead',
        longForm: 'Service Unit Lead - Follow-up Unit',
      };

    default:
      return {
        urlForm: '',
        longForm: '',
      };
  }
};
