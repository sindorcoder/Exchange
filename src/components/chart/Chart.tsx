import "chart.js/auto";
// import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const CHartComponent = ({ dataChart }: any) => {
  // const [incomeAmount, setIncomeAmount] = useState(0);
  // const [expenseAmount, setExpenseAmount] = useState(0);


  // useEffect(() => {
  //   if (income.length > 0) {
  //     const totalIncome = income.reduce((sum: number, item: any) => sum + item.amount, 0);
  //     setIncomeAmount(totalIncome);
  //   }
  //   if (expense.length > 0) {
  //     const totalExpense = expense.reduce((sum: number, item: any) => sum + item.amount, 0);
  //     setExpenseAmount(totalExpense);
  //   }
  // }, [income, expense]);



  return (
    <>
      <div className="w-full mt-5">
        <Line data={dataChart} />
      </div>
    </>
  );
};

export default CHartComponent;
