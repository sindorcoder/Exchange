import { useSelector } from "react-redux";
import CircleChat from "../../../components/circleChart/CircleChat";
import { filterData } from "../../../helpers";
import { useGetCourseQuery } from "../../../redux/api/getCourse";
import { ITransaction } from "../../../types";

const Balance = () => {
  const { data } = useGetCourseQuery();
  const conversion: any = filterData(data);

  const { totalAmount, expenceAmount, incomeAmount } = useSelector(
    (state: ITransaction) => state.transaction
  );

  const dataChart = {
    labels: ["Balance"],
    datasets: [
      {
        label: "Amount",
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
        label: "Amount",
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
        label: "Amount",
        data: [expenceAmount],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div>
      <div className="hidden md:flex mb-[40px] items-center gap-5">
        <span className="text-[18px] text-nowrap md:text-[24px] capitalize">
          exchange rate :
        </span>
        <div className="flex flex-wrap w-full justify-center items-center gap-5 mt-3">
          {conversion &&
            conversion.map((item: ITransaction, index: number) => (
              <div
                key={index}
                className="flex w-full max-w-[100px] items-end gap-2"
              >
                <h2 className="text-[18px] md:text-[30px]">{item.currency}</h2>
                <p className="text-[14px]">{item.rate}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="block md:grid grid-cols-3 items-start">
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
    </div>
  );
};

export default Balance;
