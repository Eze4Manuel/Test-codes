interface TableData {
  id: string;
  report: string;
  start: string;
  end: string;
}

export default interface UnitReportsTableProps {
  tableData: TableData[];
  itemOffset: number;
}
