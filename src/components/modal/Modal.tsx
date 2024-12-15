import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { category } from "../../assets/data";
import { allDates } from "../../assets/data";

const ModalComponent = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: boolean | any;
}) => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    const toDay : any = `${year}${'-'}${month<10?`0${month}`:`${month}`}${'-'}${date}`

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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select Category</Form.Label>
            <Form.Select>
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
            <Form.Label>Select Date</Form.Label>
            <Form.Select value={toDay}>
              {allDates.map((item: number | any, index: number) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Amount</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="capitalize">leave a comment</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
