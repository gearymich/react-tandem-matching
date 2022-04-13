import { useState, useEffect, useRef } from "react";
import Button from "../iteractive/Button"
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel, onPair, newcomerLength, oldtimerLength }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button style={(depthLevel===0)? {backgroundColor:'#E72658'} : {backgroundColor:'#F397AF'}}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
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
          <button className="attr_btn">{items.title}</button>
          </>
          )
        }
        </>
        
      )}
    </li>
  );
};

export default MenuItems;