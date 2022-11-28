interface TableData {
  name: string;
  cost: number;
  POP: string;
}

interface BudgetRequestTableType {
  tableData: TableData[];
}

export type { BudgetRequestTableType };
