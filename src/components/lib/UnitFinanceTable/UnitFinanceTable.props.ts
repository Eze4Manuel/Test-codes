interface TableData {
  index: number;
  date: string;
  cashInflow: number;
  expenditure: number;
  action: string;
}

export default interface UnitFinanceTableProps {
  tableData: TableData[];
  page: number;
  pages: number;
  limit: number;
}
