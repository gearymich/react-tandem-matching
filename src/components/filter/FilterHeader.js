import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import "../../dropdown.css";

const FilterHeader = ({onPair, newLength, oldLength}) => {
    return (
        <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} onPair = {onPair}
            depthLevel={depthLevel} newcomerLength={newLength} oldtimerLength={oldLength} />;
          })}
        </ul>
      </nav>
    )
  }
  
  export default FilterHeader