import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimerDisplay from "../components/TimerDisplay";

class CoffeeTimerPage extends React.Component {
  render() {
    return (
      <div>
        <TimerDisplay />
      </div>
    );
  }
}

export default CoffeeTimerPage;
