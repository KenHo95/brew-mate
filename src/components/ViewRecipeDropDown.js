import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class ViewRecipeDropDown extends React.Component {
  render() {
    return (
      <div style={{ width: "1050px", alignSelf: "start" }}>
        <DropdownButton
          id="recipe-dropdown-button"
          title="View Recipes"
          className="view-button"
        >
          <Dropdown.Item
            onClick={() =>
              this.props.handleRecipeDropdownClick(
                30,
                500,
                "Medium fine",
                "3min30sec",
                {
                  0: "Pre-wet with 60g water. Swirl brewer until the slurry is even. Bloom for up to 45 s",
                  45: "Complete the first main pour till 300g in the next 30s.",
                  75: "Gently complete second main pour till 500g in the next 30s.",
                  105: "Stir gently clockwise and anticlockwise to kick grounds from the sides. Gently swirl brewer to flatten coffee bed for even extraction",
                  210: "Aim to finish drawdown by 3min 30s.",
                }
              )
            }
          >
            James Hoffman’s V60 method
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              this.props.handleRecipeDropdownClick(
                20,
                300,
                "Coarse",
                "3min30sec",
                // Control the balance of the coffee by modifying the 1st and 2nd pours. For a sweeter brew, make a smaller first pour (e.g. 50g). For more acidity, a larger one will do the trick. Use either less or more water for the second pour to compensate for the difference (if any) in the first one. The 3rd, 4th and 5th pours can be tweaked to 2 larger 90g pours for a weaker brew, or into 4 smaller 45g pours for a stronger one.
                [
                  "1st Pour: Add 60g of water",
                  "2nd Pour: Add 60g of water",
                  "3rd Pour: Add 60g of water",
                  "4th Pour: Add 60g of water",
                  "5th Pour: Add 60g of water",
                ]
              )
            }
          >
            Tetsu Kasuya’s 4:6 strategy
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              this.props.handleRecipeDropdownClick(
                12,
                120,
                "Medium fine",
                "3min",
                [
                  "Pour in 12g of coffee, shaking the V60 lightly to level the grounds.",
                  "Pour boiling water from the centre of the grounds, spiralling outwards. Let it pre-wet for 30s.",
                  "Pour the rest of the brew with the same spiral motion, taking special care to avoid pouring on the filter paper itself.",
                  "Remove the dripper once your brew is finished.",
                ]
              )
            }
          >
            Hario’s V60 method
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default ViewRecipeDropDown;
