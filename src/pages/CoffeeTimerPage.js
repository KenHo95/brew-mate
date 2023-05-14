import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ElapsedTimerDisplay from "../components/ElapsedTimerDisplay";
import Button from "react-bootstrap/Button";
import InstructionsDisplay from "../components/InstructionsDisplay";
import CountdownTimerDisplay from "../components/CountdownTimerDisplay";

class CoffeeTimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTimerPaused: false, timeElapsed: 0 };
    this.handlePauseResumeButtonClick =
      this.handlePauseResumeButtonClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handlePauseResumeButtonClick() {
    this.setState({
      isTimerPaused: this.state.isTimerPaused ? false : true,
    });
  }

  tick() {
    this.setState({
      timeElapsed: this.state.timeElapsed + 1,
    });
  }

  render() {
    const isTimerPaused = this.state.isTimerPaused;
    const isRecipePageActive = this.props.isRecipePageDisplay;

    return (
      <div>
        <ElapsedTimerDisplay
          isTimerPaused={isTimerPaused}
          tick={this.tick}
          timeElapsed={this.state.timeElapsed}
        />
        <br />

        <CountdownTimerDisplay
          isPlaying={!isTimerPaused}
          timeElapsed={this.state.timeElapsed}
          recipeInstructions={this.props.recipeInstructions}
        />
        <br />
        <InstructionsDisplay
          recipeInstructions={this.props.recipeInstructions}
          timeElapsed={this.state.timeElapsed}
        />
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
