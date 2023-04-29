import React from "react";
import "./App.css";
import CoffeeRecipePage from "./pages/CoffeeRecipePage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCoffeeGrams: 1,
      recipeWaterML: 2,
      recipeGrindType: "Fine-Coarse",
      recipeTime: "3min",
      recipeInstructions: [null],
    };
    this.handleRecipeDropdownClick = this.handleRecipeDropdownClick.bind(this);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CoffeeRecipePage
            recipeCoffeeGrams={this.state.recipeCoffeeGrams}
            recipeWaterML={this.state.recipeWaterML}
            recipeGrindType={this.state.recipeGrindType}
            recipeTime={this.state.recipeTime}
            onRecipeDropdownClick={this.handleRecipeDropdownClick}
          />
        </header>
      </div>
    );
  }
}

export default App;
