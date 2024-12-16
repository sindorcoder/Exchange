import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { allDates, category } from "../../assets/data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransaction } from "../../redux/slices/CreateTransition";

const ModalComponent = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: boolean | any;
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    exchange: "",
    date: 0,
    category: "",
    amount: 0,
    comment: "",
  });

  const handleSubmit = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000).toString();

    const transactionData = { ...data, id };
    dispatch(createTransaction(transactionData));
  };

  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create Exchange</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSend}>
          <div className="flex items-center gap-5">
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Select Exchange</Form.Label>
              <Form.Select
                required
                name="exchange"
                defaultValue={"disabled"}
                onChange={handleSubmit}
              >
                <option value="disabled" disabled>
                  select exchange
                </option>
                <option value="expense">Expence</option>
                <option value="income">Income</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Select Date</Form.Label>
              <Form.Select required name="date" onChange={handleSubmit}>
                {allDates.map((item: number | any, index: number) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select Category</Form.Label>
            <Form.Select required name="category" onChange={handleSubmit}>
              {category.map((item: { name: string }, index: number) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Amount</Form.Label>
            <Form.Control
              required
              name="amount"
              onChange={handleSubmit}
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="capitalize">leave a comment</Form.Label>
            <Form.Control
              required
              name="comment"
              onChange={handleSubmit}
              as="textarea"
              rows={2}
            />
          </Form.Group>
          <div className="flex items-center justify-end">
            <Button variant="primary" type="submit">
              Create
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
