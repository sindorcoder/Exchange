import "chart.js/auto";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

const CHartComponent = () => {
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const {
    transactionHistory: { income, expense },
  } = useSelector((state: any) => state.transaction);

  useEffect(() => {
    if (income.length > 0) {
      if (expense.length > 0) {
        let result: number = 0;
        for (let i = 0; i < expense.length; i++) {
          result += expense[i].amount;
        }
        setExpenseAmount(result);
      }
      setIncomeAmount(income[0].amount);
    }
  }, [income, expense]);

  const data = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        data: [expenseAmount, incomeAmount],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className="w-full mt-5  h-[400px]">
      <Doughnut data={data} />
    </div>
  );
};

export default CHartComponent;
