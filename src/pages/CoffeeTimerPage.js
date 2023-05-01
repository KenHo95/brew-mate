import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimerDisplay from "../components/TimerDisplay";
import Button from "react-bootstrap/Button";

class CoffeeTimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTimerPaused: false };
    this.handlePauseResumeButtonClick =
      this.handlePauseResumeButtonClick.bind(this);
  }

  handlePauseResumeButtonClick() {
    this.setState({
      isTimerPaused: this.state.isTimerPaused ? false : true,
    });
  }

  render() {
    const isTimerPaused = this.state.isTimerPaused;
    const isRecipePageActive = this.props.isRecipePageDisplay;

    return (
      <div>
        <TimerDisplay isTimerPaused={isTimerPaused} />
        <br />
        <Button onClick={this.handlePauseResumeButtonClick}>
          {isTimerPaused ? "Resume" : "Pause"}
        </Button>
        <br />
        <br />
        {isTimerPaused && (
          <Button
            variant={isRecipePageActive ? "primary" : "danger"}
            onClick={this.props.handleStartStopButtonClick}
          >
            {isRecipePageActive ? "Start" : "Stop"}
          </Button>
        )}
        <br />
      </div>
    );
  }
}

export default CoffeeTimerPage;
