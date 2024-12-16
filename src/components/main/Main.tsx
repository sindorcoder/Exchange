import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalComponent from "../modal/Modal";
import { filterData } from "../../helpers/";
import { useGetCourseQuery } from "../../redux/api/getCourse";
import CHartComponent from "../chart/Chart";
import { useSelector } from "react-redux";

const Main = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data } = useGetCourseQuery();
  const conversion: any = filterData(data);
  const {
    transactionHistory: { income, expense },
  } = useSelector((state: any) => state.transaction);

  const incomeLabels = income.map((item: any) => item.category);
  const incomeData = income.map((item: any) => item.amount);
  const expenseLabels = expense.map((item: any) => item.category);
  const expenseData = expense.map((item: any) => item.amount);
  const dataChart = {
    labels: [incomeLabels, expenseLabels],
    datasets: [
      {
        label: "Incomes",
        data: incomeData,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Expenses",
        data: expenseData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <>
      <section className="w-full">
        <div className="flex items-center   md:justify-end">
          <Button
            onClick={() => handleShow()}
            variant="primary"
            className="!px-[20px] !py-1"
          >
            Create
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-5 mt-3">

          {conversion &&
            conversion.map((item: any, index: number) => (
              <div key={index} className="flex w-full max-w-[100px] items-end gap-2">
                <h2 className="text-[18px] md:text-[36px]">{item.currency}</h2>
                <p className="text-[14px]">{item.rate}</p>
              </div>
            ))}
        </div>

        <div className="w-full max-w-[800px]">
          <CHartComponent dataChart={dataChart} />
        </div>
      </section>
      <ModalComponent show={show} handleClose={handleClose} />
    </>
  );
};

export default Main;
