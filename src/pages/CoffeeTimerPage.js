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
    console.log("pause/resume button clicked");
    this.setState({
      isTimerPaused: this.state.isTimerPaused ? false : true,
    });
  }

  render() {
    const isTimerPaused = this.state.isTimerPaused;

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
          <Button onClick={this.props.handleStartStopButtonClick}>
            {this.props.isRecipePageDisplay ? "Start" : "Stop"}
          </Button>
        )}
        <br />
      </div>
    );
  }
}

export default CoffeeTimerPage;
