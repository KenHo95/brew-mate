import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class InstructionsDisplay extends React.Component {
  render() {
    const instructionIntervals = Object.keys(this.props.recipeInstructions);

    //const instructions = Object.values(this.props.recipeInstructions);

    let IndexInstruction = instructionIntervals.filter(
      (interval) => interval > this.props.timeElapsed
    )[0];

    let currentInstruction =
      this.props.recipeInstructions[
        IndexInstruction === undefined
          ? instructionIntervals[instructionIntervals.length - 1]
          : IndexInstruction
      ];

    return (
      <Table
        bordered
        style={{ color: "white", width: "400px", height: "200px" }}
      >
        <thead>
          <tr>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentInstruction}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default InstructionsDisplay;
