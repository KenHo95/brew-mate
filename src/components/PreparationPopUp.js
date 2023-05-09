import { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function PreparationPopUp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { recipeWaterML, recipeCoffeeGrams } = props;
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="prep-btn">
        Preparation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <b>Let's get you set up!</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Things you'll need</b>
          <ul>
            <li>{recipeCoffeeGrams}g Coffee</li>
            <li> {recipeWaterML}ml of Boiled water at 94°C</li>
            <li>1 x Hario V60 Ceramic Coffee Dripper</li>
            <li>1 x Hario V60</li>
            <li>1 x Paper Coffee Filter</li>
            <li>1 x Cup or a large server</li>
            <li> 1 x Kitchen Scale </li>
            <li>1 x Spoon</li>
            <li> 1 x Kettle</li>
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

export default PreparationPopUp;
