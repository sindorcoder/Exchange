import { useSelector } from "react-redux";
import CircleChat from "../../../components/circleChart/CircleChat";

const Balance = () => {
  const { totalAmount, expenceAmount, incomeAmount } = useSelector(
    (state: any) => state.transaction
  );

  console.log(totalAmount, expenceAmount, incomeAmount);

  const dataChart = {
    labels: ["Balance"],
    datasets: [
      {
        label: "Votes",
        data: [totalAmount],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 4,
      },
    ],
  };

  const dataChartTwo = {
    labels: ["Incomes"],
    datasets: [
      {
        label: "Votes",
        data: [incomeAmount],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 4,
      },
    ],
  };

  const dataChartThree = {
    labels: ["Expenses"],
    datasets: [
      {
        label: "Votes",
        data: [expenceAmount],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className="grid grid-cols-3 items-start">
      <div>
        <CircleChat data={dataChart} />
      </div>
      <div>
        <CircleChat data={dataChartTwo} />
      </div>
      <div>
        <CircleChat data={dataChartThree} />
      </div>
    </div>
  );
};

export default Balance;
