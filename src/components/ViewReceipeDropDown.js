import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class ViewReceipeDropDown extends React.Component {
  render() {
    return (
      <div style={{ width: "800px", "align-self": "start" }}>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">
            James Hoffman’s V60 method
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Tetsu Kasuya’s 4:6 strategy
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Hario’s V60 method</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default ViewReceipeDropDown;
