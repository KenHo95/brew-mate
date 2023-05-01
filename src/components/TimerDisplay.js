import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TimerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => (this.props.isTimerPaused ? this.state.timeElapsed : this.tick()),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timeElapsed: this.state.timeElapsed + 1,
    });
  }

  render() {
    const minElapsed = Math.floor(this.state.timeElapsed / 60);
    const secElapsed = this.state.timeElapsed % 60;

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
