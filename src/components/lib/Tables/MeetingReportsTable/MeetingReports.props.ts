type TableData = {
  id: string;
  index: number;
  report: string;
  action: string;
  date: string;
};

export default interface MeetingReportsProps {
  tableData: TableData[];
  itemOffset: number;
}
