import { useState } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TableComponent = ({ data }: any) => {
  const [type, setType] = useState("expence");
  console.log(data);
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
                    {
                      <DropdownButton
                        className="!bg-transparent"
                        title="Action"
                      >
                        <Dropdown.Item>Action</Dropdown.Item>
                      </DropdownButton>
                    }
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
                    {
                      <DropdownButton
                        className="!bg-transparent"
                        title="Action"
                      >
                        <Dropdown.Item>Action</Dropdown.Item>
                      </DropdownButton>
                    }
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
