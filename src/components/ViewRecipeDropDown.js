import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class ViewRecipeDropDown extends React.Component {
  render() {
    return (
      <div style={{ width: "1050px", "align-self": "start" }}>
        <DropdownButton
          id="dropdown-basic-button"
          title="View Recipes"
          className="view-button"
        >
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

export default ViewRecipeDropDown;
