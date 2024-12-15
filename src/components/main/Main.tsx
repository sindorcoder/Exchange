import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useGetCourseQuery } from "../../redux/api/getCourse";
import { useState } from "react";
import ModalComponent from "../modal/Modal";

const Main = () => {
  const { data } = useGetCourseQuery();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let conversion;
  if (data?.conversion_rates || typeof data?.conversion_rates === "object") {
    conversion =
      data &&
      Object.entries(data?.conversion_rates)
        .filter(([rate]) => rate !== null && rate !== undefined)
        .map(([currency, rate]) => ({ currency, rate }));
  }

  return (
    <>
      <section className="w-[100%] p-4 bg-white rounded-2xl">
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
        <div>
          {conversion &&
            conversion.map((item: any, index: number) => (
              <>
                <div className="flex items-center gap-2">
                  <p key={index}>{item.currency}</p>
                  <p>{item.rate}</p>
                </div>
              </>
            ))}
        </div>
      </section>
      <ModalComponent show={show} handleClose={handleClose} />
    </>
  );
};

export default Main;
