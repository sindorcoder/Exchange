export interface ITransaction {
  [x: string]: any;
  id: string;
  name?: string;
  amount: number;
  date: number;
  category: string;
  type?: string;
  comment: string;
  exchange: string

}

export interface IPayload {
  [x: string]: any;
  totalAmount: number;
  expenceAmount: number | string;
  incomeAmount: number | string;
  transactionHistory: { expense: ITransaction[]; income: ITransaction[] };
  amount: number;
}

export interface IResponse {
  exchange: any;
  base_code: string;
  conversion_rates: Record<string, number>;
  documentation: string;
  result: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}
