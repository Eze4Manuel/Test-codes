interface TableData {
  id: string;
  index: number;
  first_name: string;
  last_name: string;
  gender: string;
  role: string;
  serviceUnit: string;
}

export default interface MembersTableProps {
  tableData?: TableData[];
}
