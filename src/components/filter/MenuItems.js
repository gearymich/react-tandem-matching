import { useState, useEffect, useRef } from "react";
import filterLocals from "../people/filterPeople";
import Button from "../iteractive/Button";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel, onPair, newcomerLength, oldtimerLength }) => {

  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  // const filterNewcomers = (type, filter) => {
  //   console.log(type + ":  " + filter);
  // }

  return (
    
    <li
      className="menu-items"
      // ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button style={(depthLevel===0)? {backgroundColor:'#E72658'} : {backgroundColor:'#F397AF'}}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.title}
            {(depthLevel===0 && items.title==="NEWCOMERS")
              && " ("+newcomerLength+")"}
            {(depthLevel===0 && items.title==="LOCALS")
              && " ("+oldtimerLength+")"}

            {" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
        {(depthLevel === 0) ? (
          <>
          <Button className="btn" color='grey' text='Match Pair'
            onClick={ onPair } textsize='18px'/>
          </>
          ) : ( 
          <> 
          <button onClick={ () => {
            (items.ftype === "H") 
              && filterLocals("H", "Hiking") ;
            }}> {items.title} </button>
          </>
          )
        }
        </>
        
      )}
    </li>
  );
};

export default MenuItems;