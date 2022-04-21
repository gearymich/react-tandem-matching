import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import "../../dropdown.css";

const FilterHeader = ({onPair, newLength, oldLength, filterLocals, filterNewcomers}) => {
    return (
        <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems 
              key={index} 
              items={menu} 
              onPair = {onPair} // only for 'match' button
              depthLevel={depthLevel}
              newcomerLength={newLength}
              oldtimerLength={oldLength}

              filterLocals = {filterLocals}
              filterNewcomers = {filterNewcomers}
            />;})}
        </ul>
      </nav>
    )
  }
  
  export default FilterHeader