import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/slices/CreateTransition";

const TableComponent = ({ data }: any) => {
  const [type, setType] = useState("expence");
  const dispatch = useDispatch()
  const handleDelete = (data: any) => {
    dispatch(deleteTransaction(data))
  };

  return (
    <>
      <header className="mb-[50px]">
        <Button onClick={() => setType("expence")} variant="">
          Expence
        </Button>{" "}
        <Button onClick={() => setType("income")} variant="">
          Income
        </Button>{" "}
      </header>
      <Table striped bordered hover>
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
          {type === "expence"
            ? data?.transactionHistory?.expense.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.exchange}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}</td>
                  <td>{item.comment}</td>
                  <td>
                    <Button onClick={() => handleDelete(item) } variant="Danger">Delete</Button>
                  </td>
                </tr>
              ))
            : data?.transactionHistory?.income.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.exchange}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}</td>
                  <td>{item.comment}</td>
                  <td>
                    <Button onClick={() => handleDelete(item) } variant="Danger">Delete</Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
