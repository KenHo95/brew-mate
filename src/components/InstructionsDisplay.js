import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "./InstructionsDisplay.css";

class InstructionsDisplay extends React.Component {
  render() {
    const instructionIntervals = Object.keys(this.props.recipeInstructions);

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
      <Table bordered className="instruction-display">
        <thead>
          <tr>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ol>
                {currentInstruction.map((instructionList, ind) => {
                  return (
                    <li className="instruction-display-list" key={ind}>
                      {instructionList}
                    </li>
                  );
                })}
              </ol>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default InstructionsDisplay;
