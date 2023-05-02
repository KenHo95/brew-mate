import React from "react";
import logo from "../coffee-garden-ai.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import RecipeDisplay from "../components/RecipeDisplay";
import ViewRecipeDropDown from "../components/ViewRecipeDropDown";

class CoffeeRecipePage extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <RecipeDisplay
          recipeCoffeeGrams={this.props.recipeCoffeeGrams}
          recipeWaterML={this.props.recipeWaterML}
          recipeGrindType={this.props.recipeGrindType}
          recipeTime={this.props.recipeTime}
        />

        <Button onClick={this.props.handleStartStopButtonClick}>
          {this.props.isRecipePageDisplay ? "Brew" : "Stop"}
        </Button>

        <ViewRecipeDropDown
          handleRecipeDropdownClick={this.props.handleRecipeDropdownClick}
        />
      </div>
    );
  }
}

export default CoffeeRecipePage;
