interface IData {
  id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  week: number;
  month: string;
  year: number;
  inflow: number;
  expenditure: number;
  unit: string;
  campusId: string;
}
export interface MonthlyFinanceHistory {
  histories: IData[];
  totalExpenditure: number;
  totalInflow: number;
  balance: number;
}
export interface MonthlyFinanceHistoryPayload {
  statusCode: string;
  message: string;
  data: MonthlyFinanceHistory;
}
