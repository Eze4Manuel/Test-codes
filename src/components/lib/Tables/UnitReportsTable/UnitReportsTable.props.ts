interface TableData {
  index: number;
  date: string;
  report: string;
}

export default interface UnitReportsTableProps {
  tableData: TableData[];
  itemOffset: number;
}
