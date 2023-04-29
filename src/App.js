import React from "react";
import "./App.css";
import CoffeeRecipePage from "./pages/CoffeeRecipePage";
import ViewRecipeDropDown from "./components/ViewRecipeDropDown";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCoffeeGrams: 1,
      recipeWaterML: 2,
      recipeGrindType: "Fine-Coarse",
      recipeTime: "3min",
    };
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
          />

          <ViewRecipeDropDown />
        </header>
      </div>
    );
  }
}

export default App;
