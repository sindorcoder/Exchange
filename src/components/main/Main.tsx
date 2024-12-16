import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
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
  const {totalAmount} = useSelector((state: any) => state.transaction);

  return (
    <>
      <section className="w-full">
        <div className="flex items-center justify-between">
          <InputGroup className="mb-3  !w-[25%]">
            <Form.Control
              placeholder="Search Exchange"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text id="inputGroup-sizing-sm">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
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
          <div className="flex justify-end w-full items-center gap-3">
            <h2 className="text-[30px]">Total Amount</h2>
            <span className="mt-[1px]">{totalAmount}$</span>
          </div>
        </div>
        <div>
          <CHartComponent />
        </div>
      </section>
      <ModalComponent show={show} handleClose={handleClose} />
    </>
  );
};

export default Main;
