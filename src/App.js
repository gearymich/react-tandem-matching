import { useState } from 'react'
import { createContext, useContext } from "react";
import Header from './components/Header'
import FilterHeader from './components/filter/FilterHeader'
import Tasks from './components/tasks/Tasks'
import Peoples from './components/people/Peoples'

import { Searchbar } from 'react-native-paper';

function App() {
  const NEWCOMERS = require('./newcomers.json')
  const LOCALS = require('./locals.json')

  const [tasks, setTasks] = useState(NEWCOMERS)
  const [peoples, setPeoples] = useState(LOCALS)

  // Match pair
  const matchPair = () => {
    if(tasks.some(task => task.reminder === true)
      && peoples.some(people => people.reminder === true)) {      
        
        setTasks(tasks.map((task) => 
          (task.reminder === true) ?      
          { ...task, matched : true, reminder: !task.reminder }
          : { ...task, reminder: false }
        ))

        setPeoples(peoples.map((people) => 
          (people.reminder === true) ? 
          { ...people, matched : true,  reminder: !people.reminder }
          : { ...people, reminder: false }
        ))
      }
  }

  //TEMP
  const [isFilter, setIsFilter] = useState(false);

  const filterLocal = (e, filterString) => {
    setIsFilter(!isFilter);
    const keyword = e.target.innerHTML;

    console.log('click');
    if (isFilter && filterString === "L-H") {
        setPeoples(peoples.map((obj) => 
        (obj.hobby !== keyword) ?
        { ...obj, display : false }
        : {...obj, display : true }
        ))

    } else if (isFilter && filterString === "L-L") {
      setPeoples(peoples.map((obj) => 
      (obj.language !== keyword) ?
      { ...obj, display : false }
      : {...obj, display : true }
      ))
  
    } else if (isFilter && filterString === "L-A") {
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

  const filterNewcomer = (e, filterString) => {
    setIsFilter(!isFilter);
    const keyword = e.target.innerHTML;

    if (isFilter && filterString === "N-H") {
        setTasks(tasks.map((obj) => 
        (obj.hobby !== keyword) ?
        { ...obj, display : false }
        : {...obj, display : true }
        ))

    } else if (isFilter && filterString === "N-L") {
      setTasks(tasks.map((obj) => 
      (obj.language !== keyword) ?
      { ...obj, display : false }
      : {...obj, display : true }
      ))
  
    } else if (isFilter && filterString === "N-A") {
      switch(keyword) {
        case "&lt; 25":
          setTasks(tasks.map((obj) => 
          (obj.age >= 25) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "25 - 35":
          setTasks(tasks.map((obj) => 
          (obj.age < 25 || obj.age > 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;
        case "&gt; 35":
          setTasks(tasks.map((obj) => 
          (obj.age <= 35) ?
          { ...obj, display : false }
          : {...obj, display : true }
          ))
          break;

        default:
          break;
      }

    } else {
      setTasks(tasks.map((obj) => 
      (true) &&
      { ...obj, display : true }
    ))
    } 
  };
  //

  // Toggle Reminder (Tasks)
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder }
        : { ...task, reminder: false }
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
      <Header title='PoC - Matching (4.4.22)'/>
    
      <FilterHeader 
        onPair={matchPair} 
        newLength={tasks.length} 
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
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} 
            onToggle={toggleReminder}/>
          ) : (
            'No Tasks To Show'
          )}
        </div>

        <div className="column" style={{width: '1%', background: '#F397AF'}}></div>

        <div className="column" style={{width: '49.5%'}}>
          {peoples.length > 0 ? (
            <Peoples peoples={peoples} 
            onToggle={toggleReminderPpl} />
          ) : (
            'No Peoples To Show'
          )}
        </div>
      </div>
    </div>
  );
}

export default App;