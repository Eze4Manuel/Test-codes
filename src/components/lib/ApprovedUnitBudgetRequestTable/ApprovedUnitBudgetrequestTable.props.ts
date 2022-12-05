import type { SingleBudgetRequestData } from '@/services/budgetrequest/payload';

export interface IApprovedUnitBudgetTableProps {
  data: SingleBudgetRequestData | undefined | null;
  loading: boolean;
}
