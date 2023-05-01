import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimerDisplay from "../components/TimerDisplay";

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
    return (
      <div>
        <TimerDisplay
          isTimerPaused={this.state.isTimerPaused}
          handlePauseResumeButtonClick={this.handlePauseResumeButtonClick}
        />
      </div>
    );
  }
}

export default CoffeeTimerPage;
