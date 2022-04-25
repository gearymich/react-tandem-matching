import { useState, useRef } from 'react'
import Header from './components/Header'
import FilterHeader from './components/filter/FilterHeader'
import Newcomers from './components/newcomers/Newcomers'
import Locals from './components/locals/Locals'

function App() {
  const NEWCOMERS = require('./newcomers.json')
  const LOCALS = require('./locals.json')

  const [newcomers, setTasks] = useState(NEWCOMERS)
  const [locals, setLocals] = useState(LOCALS)

  // Match pair
  const matchPair = () => {
    if(newcomers.some(newcomer => newcomer.reminder === true)
      && locals.some(locals => locals.reminder === true)) {      
        
        setTasks(newcomers.map((newcomer) => 
          (newcomer.reminder === true) ?      
          { ...newcomer, matched : true, reminder: !newcomer.reminder }
          : { ...newcomer, reminder: false }
        ))

        setLocals(locals.map((locals) => 
          (locals.reminder === true) ? 
          { ...locals, matched : true,  reminder: !locals.reminder }
          : { ...locals, reminder: false }
        ))
      }
  }

  //TEMP
  const [isFilterLocal, setIsFilterLocal] = useState(false);
  const [boldBtnLocal, setBoldBtnLocal] = useState(null);
  const filterLocal = (e, filterString) => {
    // if clicking into filter
    if(isFilterLocal) {
      e.target.style.color = 'black'
      e.target.style.fontWeight = 'bold'
      setBoldBtnLocal(e.target);

    } else if (boldBtnLocal !==null) {
      boldBtnLocal.style.color = 'white'
      boldBtnLocal.style.fontWeight = 'normal'
      setBoldBtnLocal(null);
    }

    setIsFilterLocal(!isFilterLocal);
    const keyword = e.target.innerHTML;

    console.log('click');
    if (isFilterLocal && filterString === "L-H") {
        setLocals(locals.map((obj) => 
        (obj.hobby !== keyword) ?
        { ...obj, display : false }
        : {...obj, display : true }
        ))

    } else if (isFilterLocal && filterString === "L-L") {
      setLocals(locals.map((obj) => 
      (obj.language !== keyword) ?
      { ...obj, display : false }
      : {...obj, display : true }
      ))
  
    } else if (isFilterLocal && filterString === "L-A") {
      switch(keyword) {
        case "&lt; 25":
          setLocals(locals.map((obj) => 
          (obj.age >= 25) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "25 - 35":
          setLocals(locals.map((obj) => 
          (obj.age < 25 || obj.age > 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "&gt; 35":
          setLocals(locals.map((obj) => 
          (obj.age <= 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;

        default:
          break;
      }

    } else {
      setLocals(locals.map((obj) => 
      (true) &&
      { ...obj, display : true }
    ))
    }
  };

  const [isFilterNewcomer, setIsFilterNewcomer] = useState(false);
  const [boldBtnNewcomer, setBoldBtnNewcomer] = useState(null);

  const filterNewcomer = (e, filterString) => {
    // styling on filter btn
    if(isFilterNewcomer) {
      e.target.style.color = 'black'
      e.target.style.fontWeight = 'bold'
      setBoldBtnNewcomer(e.target);

    } else if (boldBtnNewcomer!==null) {
      boldBtnNewcomer.style.color = 'white'
      boldBtnNewcomer.style.fontWeight = 'normal'

      setBoldBtnNewcomer(null);
    }


    setIsFilterNewcomer(!isFilterNewcomer);
    const keyword = e.target.innerHTML;

    if (isFilterNewcomer && filterString === "N-H") {
        setTasks(newcomers.map((obj) => 
        (obj.hobby !== keyword) ?
        { ...obj, display : false }
        : {...obj, display : true }
        ))

    } else if (isFilterNewcomer && filterString === "N-L") {
      setTasks(newcomers.map((obj) => 
      (obj.language !== keyword) ?
      { ...obj, display : false }
      : {...obj, display : true }
      ))
  
    } else if (isFilterNewcomer && filterString === "N-A") {
      switch(keyword) {
        case "&lt; 25":
          setTasks(newcomers.map((obj) => 
          (obj.age >= 25) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "25 - 35":
          setTasks(newcomers.map((obj) => 
          (obj.age < 25 || obj.age > 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "&gt; 35":
          setTasks(newcomers.map((obj) => 
          (obj.age <= 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;

        default:
          break;
      }

    } else {
      setTasks(newcomers.map((obj) => 
      (true) &&
      { ...obj, display : true }
    ))
    } 
  };
  //

  // Toggle Reminder (Newcomers)
  const toggleReminder = (id) => {
    setTasks(
      newcomers.map((newcomer) => 
        newcomer.id === id ? 
        { ...newcomer, reminder: !newcomer.reminder }
        : { ...newcomer, reminder: false }
      )
    )
  }

  // Toggle Reminder (locals)
  const toggleReminderPpl = (id) => {
    setLocals(
      locals.map((locals) => 
        locals.id === id ? 
        { ...locals, reminder: !locals.reminder }
        : { ...locals, reminder: false }
      )
    )
  }

  // Search hooks
  const searchNewcomer = useRef(null);
  const searchLocal = useRef(null);

  const searchNewcomerFcn = (val) => {
    console.log(val);
    // styling on filter btn
    if(val !== '') {
      setTasks(newcomers.map((obj) => 
      (obj.text.toLowerCase().includes(val.toLowerCase())) ?
      { ...obj, sdisplay : true }
      : {...obj,sdisplay : false }
      ))

    } else {
      setTasks(newcomers.map((obj) => 
      (true) &&
      { ...obj, sdisplay : true }
    ))
    }
  }

  const searchLocalFcn = (val) => {
    console.log(val);
    // styling on filter btn
    if(val !== '') {
      setLocals(locals.map((obj) => 
      (obj.text.toLowerCase().includes(val.toLowerCase())) ?
      { ...obj, sdisplay : true }
      : {...obj,sdisplay : false }
      ))

    } else {
      setLocals(locals.map((obj) => 
      (true) &&
      { ...obj, sdisplay : true }
    ))
    }
  }


  return (
    <div value={{onPair: matchPair, filterLocals: filterLocal, filterNewcomer}} className="container">
      <Header title='PoC - Matching (4.21.22)'/>
    
      <FilterHeader 
        onPair={matchPair} 
        newLength={newcomers.length} 
        oldLength={locals.length}

        // filtering
        filterLocals={filterLocal}
        filterNewcomers={filterNewcomer}
      />

      <div className='searchBoxes'>
        <input
          ref={searchNewcomer}
          onInput={e => {
            searchNewcomer.current.focus();            
            searchNewcomerFcn(searchNewcomer.current.value);
          }}
          type="text"
          id="header-search"
          placeholder="Search: Newcomers"
          name="s" 
        />
        <input
          ref={searchLocal}
          onInput={e => {
            searchLocal.current.focus();            
            searchLocalFcn(searchLocal.current.value);
          }}
          type="text"
          id="header-search"
          placeholder="Search: Locals"
          name="s" 
        />
      </div>

      <div className='body'>
        <div className="column" style={{width: '49.5%'}}>
          {newcomers.length > 0 ? (
            <Newcomers newcomers={newcomers} 
            onToggle={toggleReminder}/>
          ) : (
            'No Newcomers To Show'
          )}
        </div>

        <div className="column" style={{width: '1%', background: '#F397AF'}}></div>

        <div className="column" style={{width: '49.5%'}}>
          {locals.length > 0 ? (
            <Locals locals={locals} 
            onToggle={toggleReminderPpl} />
          ) : (
            'No Locals To Show'
          )}
        </div>
      </div>
    </div>
  );
}

export default App;