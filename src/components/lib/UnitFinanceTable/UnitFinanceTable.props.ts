import type { MonthlyFinanceHistory } from '@/services/unitFinance/payload';

export default interface UnitFinanceTableProps {
  tableData: MonthlyFinanceHistory | undefined;
  page: number;
  pages: number;
  limit: number;
}
