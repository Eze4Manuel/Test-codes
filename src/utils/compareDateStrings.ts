/* eslint-disable no-else-return */
const compareDateStrings = (arr: [], key: string) => {
  return arr.sort((a: any, b: any) => {
    const dateStringA = new Date(a[key]).toISOString();
    const dateStringB = new Date(b[key]).toISOString();
    if (dateStringA > dateStringB) {
      return -1;
    } else if (dateStringB > dateStringA) {
      return 1;
    } else {
      return 0;
    }
  });
};

export default compareDateStrings;
