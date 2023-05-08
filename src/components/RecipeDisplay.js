import React from "react";
import Table from "react-bootstrap/Table";


class RecipeDisplay extends React.Component {
  render() {
    return (
      <Table className="recipe-display-table">
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
            <td>{this.props.recipeTime === 0 ? "-" : this.props.recipeTime}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default RecipeDisplay;
