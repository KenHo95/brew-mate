import { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="faq-btn">
        ?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <b>Unraveling Your Coffee FAQs</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <ul>
            <b>What is the ideal water temperature for pour-over coffee?</b>{" "}
            <li>
              {" "}
              The ideal water temperature for pour-over coffee is between 195°F
              and 205°F (90°C to 96°C). This range ensures proper extraction
              without scorching the coffee.{" "}
            </li>
            <br></br>
            <b>
              How long should I bloom the coffee grounds during pour-over
              brewing?{" "}
            </b>
            <li>
              It is recommended to bloom the coffee grounds for around 30
              seconds. Start by saturating the grounds with a small amount of
              hot water and let them release trapped gases before continuing
              with the pour.
            </li>{" "}
            <br></br>
            <b>
              What is the recommended pouring technique for pour-over coffee?{" "}
            </b>
            <li>
              The recommended pouring technique for pour-over coffee is to pour
              in a circular motion, starting from the center and gradually
              moving outward, while maintaining a steady and controlled flow
              rate.
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
