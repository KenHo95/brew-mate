import React from "react";
import logo from "./coffee-garden-ai.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: 0,
      water: 0,
      grind: 0,
      time: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Table bordered hover style={{ color: "white", width: "400px" }}>
            <thead>
              <tr>
                <th>Coffee</th>
                <th>Water</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.coffee === 0 ? "-" : this.state.coffee + "g"}
                </td>
                <td>
                  {this.state.water === 0 ? "-" : this.state.coffee + "ml"}
                </td>
              </tr>
              <tr>
                <th>Grind</th>
                <th>Time</th>
              </tr>
              <tr>
                <td>{this.state.grind === 0 ? "-" : this.state.coffee}</td>
                <td>{this.state.time === 0 ? "-" : this.state.coffee}</td>
              </tr>
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default App;
