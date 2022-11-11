type TableData = {
  index: number;
  report: string;
  action: string;
};

export default interface MeetingReportsProps {
  tableData: TableData[];
  itemOffset: number;
}
