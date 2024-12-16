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

  const dataChart = {
    labels: incomeLabels,
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
        data: expense.map((item: any) => item.amount),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <>
      <section className="w-full">
        <div className="flex items-center justify-end">
          <Button
            onClick={() => handleShow()}
            variant="primary"
            className="!px-[20px] !py-1"
          >
            Create
          </Button>
        </div>
        <div className="flex items-center gap-5 mt-3">
          {conversion &&
            conversion.map((item: any, index: number) => (
              <div key={index} className="flex items-end gap-2">
                <h2 className="text-[36px]">{item.currency}</h2>
                <p>{item.rate}</p>
              </div>
            ))}
        </div>
        <CHartComponent dataChart={dataChart} />
        <div></div>
      </section>
      <ModalComponent show={show} handleClose={handleClose} />
    </>
  );
};

export default Main;
