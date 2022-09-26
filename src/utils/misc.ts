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

    default:
      return {
        urlForm: '',
        longForm: '',
      };
  }
};
