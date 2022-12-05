interface IData {
  id?: string;
  name: string;
  cost: number | string;
}

export interface CreateBudgetRequestPayload {
  start: string;
  campus: string;
  unit: string;
  end: string;
  items: IData[];
}

export interface GetBudgetRequestQueryPayload {
  start: string;
  end: string;
  unit: string | undefined;
}

interface IBudgetItems {
  id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  name: string;
  cost: number;
  imgURL: string | null;
  budgetId: string;
}

export interface SingleBudgetRequestData {
  id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  total: number;
  unit: string;
  status: string;
  inflow: number;
  expenditure: number;
  balance: number;
  start: Date;
  end: Date;
  week: number;
  month: string;
  year: number;
  items: IBudgetItems[];
  campusId: string;
}
export interface GetSingleBudgetRequestPayload {
  statusCode: string;
  message: string;
  data: SingleBudgetRequestData;
}

export interface CheckBudgetItem {
  query: string;
}
