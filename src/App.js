import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import CoffeeRecipePage from "./pages/CoffeeRecipePage";
import CoffeeTimerPage from "./pages/CoffeeTimerPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCoffeeGrams: 1,
      recipeWaterML: 2,
      recipeGrindType: "Fine-Coarse",
      recipeTime: "3min",
      recipeInstructions: [null],
      isRecipePageDisplay: true,
    };
    this.handleRecipeDropdownClick = this.handleRecipeDropdownClick.bind(this);
    this.handleStartStopButtonClick =
      this.handleStartStopButtonClick.bind(this);
  }

  handleRecipeDropdownClick(
    recipeCoffeeGrams,
    recipeWaterML,
    recipeGrindType,
    recipeTime,
    recipeInstructions
  ) {
    this.setState({
      recipeCoffeeGrams: recipeCoffeeGrams,
      recipeWaterML: recipeWaterML,
      recipeGrindType: recipeGrindType,
      recipeTime: recipeTime,
      recipeInstructions: recipeInstructions,
    });
  }

  handleStartStopButtonClick() {
    this.setState({
      isRecipePageDisplay:
        this.state.isRecipePageDisplay === true ? false : true,
    });
  }

  render() {
    const isRecipePageActive = this.state.isRecipePageDisplay;

    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.handleStartStopButtonClick}>
            {isRecipePageActive ? "Start" : "Stop"}
          </Button>
          <br />

          {isRecipePageActive ? (
            <CoffeeRecipePage
              recipeCoffeeGrams={this.state.recipeCoffeeGrams}
              recipeWaterML={this.state.recipeWaterML}
              recipeGrindType={this.state.recipeGrindType}
              recipeTime={this.state.recipeTime}
              onRecipeDropdownClick={this.handleRecipeDropdownClick}
            />
          ) : (
            <CoffeeTimerPage />
          )}
        </header>
      </div>
    );
  }
}

export default App;
