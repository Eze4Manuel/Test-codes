import type { MonthlyFinanceHistory } from '@/services/unitFinance/payload';

export interface UnitFinancePros {
  data: MonthlyFinanceHistory | undefined;
}
