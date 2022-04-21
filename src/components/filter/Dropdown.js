import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel, filterLocals, filterNewcomers }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems key={index} items={submenu} depthLevel={depthLevel} 
        filterLocals= {filterLocals} filterNewcomers= {filterNewcomers}/>
      ))}
    </ul>
  );
};

export default Dropdown;