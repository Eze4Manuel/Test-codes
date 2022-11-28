export interface UnitBudgetRequestTableProps {
  status?: string;
  endDate: string;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  toggleTableType: () => void;
}
