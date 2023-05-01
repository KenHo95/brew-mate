import React from "react";
import logo from "../coffee-garden-ai.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ViewRecipeDropDown from "../components/ViewRecipeDropDown";

class CoffeeRecipePage extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Table bordered style={{ color: "white", width: "400px" }}>
          <thead>
            <tr>
              <th>Coffee</th>
              <th>Water</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.recipeCoffeeGrams === 0
                  ? "-"
                  : this.props.recipeCoffeeGrams + " g"}
              </td>
              <td>
                {this.props.recipeWaterML === 0
                  ? "-"
                  : this.props.recipeWaterML + " ml"}
              </td>
            </tr>
            <tr>
              <th>Grind</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>
                {this.props.recipeGrindType === 0
                  ? "-"
                  : this.props.recipeGrindType}
              </td>
              <td>
                {this.props.recipeTime === 0 ? "-" : this.props.recipeTime}
              </td>
            </tr>
          </tbody>
        </Table>

        <Button onClick={this.props.handleStartStopButtonClick}>
          {this.props.isRecipePageDisplay ? "Brew" : "Stop"}
        </Button>

        <ViewRecipeDropDown
          onRecipeDropdownClick={this.props.onRecipeDropdownClick}
        />
      </div>
    );
  }
}

export default CoffeeRecipePage;
