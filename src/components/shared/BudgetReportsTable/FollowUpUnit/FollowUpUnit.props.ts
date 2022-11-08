interface TableData {
  id: string;
  name: string;
  cost: string;
  proof: string;
}

export default interface FollowUpUnitBudgetProps {
  tableData?: TableData[];
}
