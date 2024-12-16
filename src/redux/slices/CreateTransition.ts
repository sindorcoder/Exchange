import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Amount = (expense: any, income: any) => {
  return (
    income.reduce((acc: number, b: any) => acc + b.amount, 0) -
    expense.reduce((acc: number, b: any) => acc + b.amount, 0)
  );
};
 
const initialState: any = {
  totalAmount: Amount(
    JSON.parse(localStorage.getItem("expense-history") as string) || [],
    JSON.parse(localStorage.getItem("income-history") as string) || []
  ),

  transactionHistory: {
    expense:
      JSON.parse(localStorage.getItem("expense-history") as string) || [],
    income: JSON.parse(localStorage.getItem("income-history") as string) || [],
  },
};

const transactionSlice = createSlice({
  name: "transaction-history",
  initialState,
  reducers: {
    createTransaction: (state, action: PayloadAction<any>) => {
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
    deleteTransaction: (state, action: PayloadAction<any>) => {
        const payload = action.payload
        switch(payload.exchange){
            case "income":
                state.totalAmount -= payload.amount
                state.transactionHistory.income = state.transactionHistory.income.filter((item: any) => item.id !== payload.id);
                localStorage.setItem("income-history", JSON.stringify(state.transactionHistory.income))
            break;
            case "expense":
                state.totalAmount += payload.amount
                state.transactionHistory.expense = state.transactionHistory.expense.filter((item: any) => item.id !== payload.id);
                localStorage.setItem("expense-history", JSON.stringify(state.transactionHistory.expense))
            break;
        }
    }
  },
});

export const { createTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
