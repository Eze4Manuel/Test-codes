interface Reports {
  service_unit: string;
  date: string;
  report: string;
  id: string;
}

interface ReportsResidentPastorTypes {
  tableData: Reports[];
  itemOffset: number;
  data?: any;
  handlePageClick: (event: any) => void;
  pageCount: number;
}

export default ReportsResidentPastorTypes;
