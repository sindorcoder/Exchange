import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPayload, ITransaction } from "../../types";

const Amount = (expense: IPayload, income: IPayload) => {
  return (
    income.reduce((acc: number, b: IPayload) => (acc += b.amount), 0) -
    expense.reduce((acc: number, b: IPayload) => (acc += b.amount), 0)
  );
};

const expenceAmount = (expense: IPayload, income: IPayload) => {
  return (
    expense.reduce((acc: number, b: IPayload) => (acc += b.amount), 0),
    income.reduce((acc: number, b: IPayload) => (acc += b.amount), 0)
  );
};
const incomeAmount = (expense: IPayload , income: IPayload) => {
  return (
    income.reduce((acc: number, b: IPayload) => (acc += b.amount), 0),
    expense.reduce((acc: number, b: IPayload) => (acc += b.amount), 0)
  );
};

const initialState: IPayload = {
  totalAmount: Amount(
    JSON.parse(localStorage.getItem("expense-history") as string) || [],
    JSON.parse(localStorage.getItem("income-history") as string) || []
  ),
  expenceAmount: expenceAmount(
    JSON.parse(localStorage.getItem("expense-history") as string) || [],
    JSON.parse(localStorage.getItem("income-history") as string) || []
  ),
  incomeAmount: incomeAmount(
    JSON.parse(localStorage.getItem("expense-history") as string) || [],
    JSON.parse(localStorage.getItem("income-history") as string) || []
  ),

  transactionHistory: {
    expense: JSON.parse(localStorage.getItem("expense-history") as string) || [],
    income: JSON.parse(localStorage.getItem("income-history") as string) || [],
  },
  amount: 0
};

const transactionSlice = createSlice({
  name: "transaction-history",
  initialState,
  reducers: {
    createTransaction: (state, action: PayloadAction<ITransaction>) => {
      const payload = action.payload;
      switch (payload.exchange) {
        case "income":
          state.totalAmount += payload.amount;
          state.transactionHistory.income.push(payload);
          localStorage.setItem(
            "income-history",
            JSON.stringify(state.transactionHistory.income)
          );
          break;
        case "expense":
          state.totalAmount -= payload.amount;
          state.transactionHistory.expense.push(payload);
          localStorage.setItem(
            "expense-history",
            JSON.stringify(state.transactionHistory.expense)
          );
          break;
      }
    },
    deleteTransaction: (state, action: PayloadAction<ITransaction>) => {
      const payload = action.payload;
      switch (payload.exchange) {
        case "income":
          state.totalAmount -= payload.amount;
          state.transactionHistory.income =
            state.transactionHistory.income.filter(
              (item: any) => item.id !== payload.id
            );
          localStorage.setItem(
            "income-history",
            JSON.stringify(state.transactionHistory.income)
          );
          break;
        case "expense":
          state.totalAmount += payload.amount;
          state.transactionHistory.expense =
            state.transactionHistory.expense.filter(
              (item: any) => item.id !== payload.id
            );
          localStorage.setItem(
            "expense-history",
            JSON.stringify(state.transactionHistory.expense)
          );
          break;
      }
    },
  },
});

export const { createTransaction, deleteTransaction } =
  transactionSlice.actions;
export default transactionSlice.reducer;
