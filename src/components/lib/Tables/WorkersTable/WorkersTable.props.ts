interface TableData {
  index: number;
  first_name: string;
  last_name: string;
  gender: string;
  role: string;
  serviceUnit: string;
}

export default interface WorkersTableProps {
  tableData: TableData[];
  itemOffset: number;
}
