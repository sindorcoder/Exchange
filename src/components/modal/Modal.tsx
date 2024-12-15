import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { category, toDay } from "../../assets/data";
import { allDates } from "../../assets/data";
import { useState } from "react";

const ModalComponent = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: boolean | any;
}) => {
  const [data, setData] = useState({
    exchange: "",
    date: 0,
    category: "",
    amount: 0,
    comment: "",
  });
  
  const handleSubmit = (e: any) => {
    e.preventDefault()

    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
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
        <Form>
          <div className="flex items-center gap-5">
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Select Exchange</Form.Label>
              <Form.Select name="exchange" onChange={handleSubmit}>
                <option value="expence">Expence</option>
                <option value="income">Income</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Select Date</Form.Label>
              <Form.Select name="date" onChange={handleSubmit} value={toDay}>
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
            <Form.Select name="category" onChange={handleSubmit}>
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
            <Form.Control name="amount" onChange={handleSubmit} type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="capitalize">leave a comment</Form.Label>
            <Form.Control name="comment" onChange={handleSubmit} as="textarea" rows={2} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Create
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
