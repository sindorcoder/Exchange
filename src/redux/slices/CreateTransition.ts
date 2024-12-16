import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  totalAmount:
    (JSON.parse(localStorage.getItem("expense-history") as string) || [],
    JSON.parse(localStorage.getItem("income-history") as string) || []),
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
    // deleteTransaction: (state, action: PayloadAction<ITransaction>) => {
    //     const payload = action.payload
    //     console.log(payload)
    //     switch(payload.expense_or_income){
    //         case "income":
    //             state.totalAmount -= payload.amount
    //             state.transactionHistory.income = state.transactionHistory.income.filter((item: ITransaction) => item.id !== payload.id);
    //             localStorage.setItem("income-history", JSON.stringify(state.transactionHistory.income))
    //         break;
    //         case "expense":
    //             state.totalAmount += payload.amount
    //             state.transactionHistory.expense = state.transactionHistory.expense.filter((item: ITransaction) => item.id !== payload.id);
    //             localStorage.setItem("expense-history", JSON.stringify(state.transactionHistory.expense))
    //         break;
    //     }
    // }
  },
});

export const { createTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
