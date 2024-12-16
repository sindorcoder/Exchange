import { useEffect, useState } from "react";
import { Button, FormSelect } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/slices/CreateTransition";
import { allDates, category } from "../../assets/data";
import { ITransaction } from "../../types";

const TableComponent = ({ data }: any) => {
  const [type, setType] = useState("expence");
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const handleDelete = (data: any) => {
    dispatch(deleteTransaction(data));
  };

  useEffect(() => {
    let filteredData = [];
    let filteredCategory = [];

    if (type === "expence") {
      filteredData = filterDate
        ? data.transactionHistory.expense.filter(
            (item: any) => item.date === filterDate
          )
        : data.transactionHistory.expense;

      filteredCategory = filterCategory
        ? filteredData.filter((item: any) => item.category === filterCategory)
        : filteredData;
    }

    if (type === "income") {
      filteredData = filterDate
        ? data.transactionHistory.income.filter(
            (item: any) => item.date === filterDate
          )
        : data.transactionHistory.income;

      filteredCategory = filterCategory
        ? filteredData.filter((item: any) => item.category === filterCategory)
        : filteredData;
    }

    setFilteredData(filteredCategory);
  }, [filterDate, filterCategory, type]);

  const handleResetInfo = () => {
    setFilterDate("");
    setFilterCategory("");
    setType("expence");
    setFilteredData(data.transactionHistory.expense);
  };

  return (
    <div className="container mx-auto px-4">
      <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2">
          <Button onClick={() => setType("expence")} variant="">
            Expence
          </Button>
          <Button onClick={() => setType("income")} variant="">
            Income
          </Button>
        </div>
        <div className="block md:flex items-center gap-2">
          <span className="capitalize text-nowrap text-sm text-gray-700">
            Filtered by :
          </span>
          <FormSelect
            defaultValue={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="max-w-[200px] my-4 md:m-0"
          >
            <option value="">All Dates</option>
            {allDates.map((item: string, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </FormSelect>
          <FormSelect
            defaultValue={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="max-w-[200px] my-4 md:m-0 "
          >
            <option value="">All Categories</option>
            {category.map((item: {name: string}, index: number) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </FormSelect>
          <Button onClick={handleResetInfo} className="py-1 text-sm">
            Reset
          </Button>
        </div>
      </header>
      <div className="table-responsive">
        <Table striped bordered hover className="text-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Exchange</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item: ITransaction) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.exchange}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.comment}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(item)}
                    variant="danger"
                    className="text-xs"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
