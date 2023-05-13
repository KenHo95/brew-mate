import React from "react";
import logo from "../transparent.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import RecipeDisplay from "../components/RecipeDisplay";
import ViewRecipeDropDown from "../components/ViewRecipeDropDown";
import PreparationPopUp from "../components/PreparationPopUp";
import ChooseRecipeMessage from "../components/ChooseRecipeMessage";
import FAQPage from "../components/FAQPage";

class CoffeeRecipePage extends React.Component {
  render() {
    return (
      <div>
        <div className="faq-btn">
          <FAQPage />
        </div>

        <img src={logo} className="App-logo" alt="logo" />

        {/* Inital recipe selection */}
        {this.props.recipeTime === "-" && (
          <div className="choose-recipe-container">
            <ChooseRecipeMessage />
            <div className="choose-recipe-container-dropdown">
              <ViewRecipeDropDown
                handleRecipeDropdownClick={this.props.handleRecipeDropdownClick}
              />
            </div>
          </div>
        )}

        {/* Recipe Display */}
        {this.props.recipeTime !== "-" && (
          <RecipeDisplay
            recipeCoffeeGrams={this.props.recipeCoffeeGrams}
            recipeWaterML={this.props.recipeWaterML}
            recipeGrindType={this.props.recipeGrindType}
            recipeTime={this.props.recipeTime}
          />
        )}

        {/* Start Brew */}
        {this.props.recipeTime !== "-" && (
          <div className="brew-btn">
            <Button onClick={this.props.handleStartStopButtonClick}>
              {this.props.isRecipePageDisplay ? "Brew" : "Stop"}
            </Button>
          </div>
        )}

        {/* Subsequent recipe selection, FAQ, Preparation Button*/}
        {this.props.recipeTime !== "-" && (
          <div className="button-container">
            <ViewRecipeDropDown
              handleRecipeDropdownClick={this.props.handleRecipeDropdownClick}
            />

            <PreparationPopUp
              recipeCoffeeGrams={this.props.recipeCoffeeGrams}
              recipeWaterML={this.props.recipeWaterML}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CoffeeRecipePage;
