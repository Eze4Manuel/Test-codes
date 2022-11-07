interface TableData {
  index: number;
  date: string;
  cashInflow: string;
  expenditure: string;
  action: string;
}

export default interface UnitFinanceTableProps {
  tableData: TableData[];
}
