const useGetDate = () => {
  const curr = new Date(); // get current date
  let first = curr.getDate() - curr.getDay();
  first -= 7;
  const firstDayOb = new Date(curr.setDate(first));
  const firstDay = firstDayOb.toLocaleDateString();

  const firstDayTemp = firstDayOb;

  const lastDay = new Date(
    firstDayTemp.setDate(firstDayTemp.getDate() + 6)
  ).toLocaleDateString();

  return { firstDay, lastDay };
};

export default useGetDate;
