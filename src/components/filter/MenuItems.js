import { useState, useEffect, useRef } from "react";
import Button from "../iteractive/Button";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel, onPair, newcomerLength, oldtimerLength, filterLocals, filterNewcomers }) => {

  const [dropdown, setDropdown] = useState(false);
  
  const ref = useRef();

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const testFcn = () => {
    onPair()
  }

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
            {(depthLevel===0 && items.title==="EINWANDER*INNEN")
              && " ("+newcomerLength+")"}
            {(depthLevel===0 && items.title==="LOCAL")
              && " ("+oldtimerLength+")"}

            {" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}

            // filtering
            filterLocals={filterLocals}
            filterNewcomers={filterNewcomers}
          />
        </>
      ) : (
        <>
        {(depthLevel === 0) ? (
          <>
          <Button className="btn" color='grey' text='Match!'
            onClick={ onPair } textsize='18px' />
          </>
          ) : ( 
          <> 
          <button onClick={ (e) => {
            (items.ftype === "L-H")  && filterLocals(e, "L-H") ;
            (items.ftype === "L-L")  && filterLocals(e, "L-L") ;
            (items.ftype === "L-A")  && filterLocals(e, "L-A") ;


            (items.ftype === "N-H")  && filterNewcomers(e, "N-H") ;
            (items.ftype === "N-L")  && filterNewcomers(e, "N-L") ;
            (items.ftype === "N-A")  && filterNewcomers(e, "N-A") ;

            
            }}>{items.title}</button> 
            </>
          )
        }
        </>
        
      )}
    </li>
  );
};

export default MenuItems;