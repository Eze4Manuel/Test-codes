interface TableData {
  id: string;
  index: number;
  first_name: string;
  last_name: string;
  gender: string;
  map_group_name: string;
  unit: string;
}

export default interface MembersTableProps {
  itemOffset: number;
  members: TableData[];
  data?: any;
  handlePageClick?: (event: any) => void;
  pageCount: number;
}
