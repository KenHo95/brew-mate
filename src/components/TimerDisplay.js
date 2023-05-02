import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TimerDisplay extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.props.isTimerPaused ? this.props.timeElapsed : this.props.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const minElapsed = Math.floor(this.props.timeElapsed / 60);
    const secElapsed = this.props.timeElapsed % 60;

    return (
      <div>
        <h2>Time Elapsed</h2>
        <span>
          {minElapsed >= 1 ? minElapsed + " min " : "0 min"} {secElapsed} sec
        </span>
      </div>
    );
  }
}

export default TimerDisplay;
