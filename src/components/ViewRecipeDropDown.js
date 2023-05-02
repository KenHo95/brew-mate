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
                "3 min 30 sec",
                {
                  45: "Pre-wet with 60g water. Swirl brewer until the slurry is even. Bloom for up to 45 s",
                  75: "Complete the first main pour till 300g in the next 30s.",
                  105: "Gently complete second main pour till 500g in the next 30s.",
                  210: "Stir gently clockwise and anticlockwise to kick grounds from the sides. Gently swirl brewer to flatten coffee bed for even extraction",
                  211: "Aim to finish drawdown by 3min 30s.",
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
                "3 min 45 sec",
                // Control the balance of the coffee by modifying the 1st and 2nd pours. For a sweeter brew, make a smaller first pour (e.g. 50g). For more acidity, a larger one will do the trick. Use either less or more water for the second pour to compensate for the difference (if any) in the first one. The 3rd, 4th and 5th pours can be tweaked to 2 larger 90g pours for a weaker brew, or into 4 smaller 45g pours for a stronger one.
                {
                  45: "1st Pour: Add 60g of water",
                  90: "2nd Pour: Add 60g of water",
                  135: "3rd Pour: Add 60g of water",
                  180: "4th Pour: Add 60g of water",
                  225: "5th Pour: Add 60g of water. Aim to finish drawdown by 3min 30s.",
                }
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
                "3 min",
                {
                  30: "Pour water from centre of the grounds, spiralling outwards. Let it pre-wet for 30s.",
                  180: "Pour rest of the brew with same spiral motion. Avoid pouring on filter paper itself.",
                }
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
