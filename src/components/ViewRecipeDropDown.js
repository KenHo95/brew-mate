import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class ViewRecipeDropDown extends React.Component {
  render() {
    return (
      <div>
        <DropdownButton
          id="recipe-dropdown-button"
          title="Recipes "
          className="view-button"
          drop="down-centered"
          variant="outline-primary"
        >
          <Dropdown.Item
            onClick={() =>
              this.props.handleRecipeDropdownClick(
                15,
                250,
                "Medium fine",
                "3 min",
                {
                  45: "Pour 50g of water to bloom. Gently Swirl. Let it bloom for 45s",
                  70: "Pour up to 100g total, then pause for 10s",
                  90: "Pour up to 150g total, then pause for 10s",
                  110: "Pour up to 200g total, then pause for 10s",
                  120: "Pour up to 250g total, then pause for 10s",
                  125: "Gently swirl",
                  130: "Drawdown should finish around 3:00, but expect some variance here. Taste is the most important thing!",
                }
              )
            }
          >
            James Hoffman’s 1 Cup V60 Technique
          </Dropdown.Item>
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
                  215: "Aim to finish drawdown by 3min 30s.",
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
