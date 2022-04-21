import { useState } from 'react'
import { createContext, useContext } from "react";
import Header from './components/Header'
import FilterHeader from './components/filter/FilterHeader'
import Newcomers from './components/newcomers/Newcomers'
import Locals from './components/locals/Locals'

import { Searchbar } from 'react-native-paper';

function App() {
  const NEWCOMERS = require('./newcomers.json')
  const LOCALS = require('./locals.json')

  const [newcomers, setTasks] = useState(NEWCOMERS)
  const [peoples, setPeoples] = useState(LOCALS)

  // Match pair
  const matchPair = () => {
    if(newcomers.some(newcomer => newcomer.reminder === true)
      && peoples.some(people => people.reminder === true)) {      
        
        setTasks(newcomers.map((newcomer) => 
          (newcomer.reminder === true) ?      
          { ...newcomer, matched : true, reminder: !newcomer.reminder }
          : { ...newcomer, reminder: false }
        ))

        setPeoples(peoples.map((people) => 
          (people.reminder === true) ? 
          { ...people, matched : true,  reminder: !people.reminder }
          : { ...people, reminder: false }
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
        setPeoples(peoples.map((obj) => 
        (obj.hobby !== keyword) ?
        { ...obj, display : false }
        : {...obj, display : true }
        ))

    } else if (isFilterLocal && filterString === "L-L") {
      setPeoples(peoples.map((obj) => 
      (obj.language !== keyword) ?
      { ...obj, display : false }
      : {...obj, display : true }
      ))
  
    } else if (isFilterLocal && filterString === "L-A") {
      switch(keyword) {
        case "&lt; 25":
          setPeoples(peoples.map((obj) => 
          (obj.age >= 25) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "25 - 35":
          setPeoples(peoples.map((obj) => 
          (obj.age < 25 || obj.age > 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "&gt; 35":
          setPeoples(peoples.map((obj) => 
          (obj.age <= 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;

        default:
          break;
      }

    } else {
      setPeoples(peoples.map((obj) => 
      (true) &&
      { ...obj, display : true }
    ))
    }
  };

  const [isFilterNewcomer, setIsFilterNewcomer] = useState(false);
  const [boldBtnNewcomer, setBoldBtnNewcomer] = useState(null);
  const filterNewcomer = (e, filterString) => {
    // if clicking into filter
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

  // Toggle Reminder (People)
  const toggleReminderPpl = (id) => {
    setPeoples(
      peoples.map((people) => 
        people.id === id ? 
        { ...people, reminder: !people.reminder }
        : { ...people, reminder: false }
      )
    )
  }

  return (
    <div value={{onPair: matchPair, filterLocals: filterLocal, filterNewcomer}} className="container">
      <Header title='PoC - Matching (4.21.22)'/>
    
      <FilterHeader 
        onPair={matchPair} 
        newLength={newcomers.length} 
        oldLength={peoples.length}

        // filtering
        filterLocals={filterLocal}
        filterNewcomers={filterNewcomer}
      />

      <div className='searchBoxes'>
        <Searchbar className='search' placeholder="Newcomers"/>
        <Searchbar className='search' placeholder="Locals"/>
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
          {peoples.length > 0 ? (
            <Locals peoples={peoples} 
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