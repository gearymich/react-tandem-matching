import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/tasks/Tasks'
import AddTask from './components/tasks/AddTask'

import Peoples from './components/people/Peoples'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Paulene F.',
    day: '28.3.22',
    age: '25 yrs',
    hobby: 'Hiking',
    reminder: true,
  },
  {
    id: 2,
    text: 'Grace G.',
    day: '5.4.22',
    age: '30 yrs',
    hobby: 'Football',
    reminder: false,
  },
  {
    id: 3,
    text: 'Phillip J.',
    day: '24.5.22',
    age: '28 yrs',
    hobby: 'Dancing',
    reminder: false,
  },
  {
    id: 77,
    text: 'Martin M.',
    day: '5.5.21',
    age: '22 yrs',
    hobby: 'Football',
    reminder: false,
  },
  {
    id: 101,
    text: 'Phillip J.',
    day: '9.9.22',
    age: '30 yrs',
    hobby: 'Juggling',
    reminder: false,
  },
  ])
  const [peoples, setPeoples] = useState([
    {
      id: 4,
      text: 'Bill B.',
      day: '2.2.22',
      age: '21 yrs',
      hobby: 'Football',
      reminder: false,
    },
    {
      id: 5,
      text: 'Joe L.',
      day: '9.30.19',
      age: '38 yrs',
      hobby: 'Drawing',
      reminder: true,
    },
    {
      id: 6,
      text: 'Jane A.',
      day: '1.14.18',
      age: '33 yrs',
      hobby: 'Hiking',
      reminder: false,
    },
    {
      id: 7,
      text: 'Alex E.',
      day: '2.15.21',
      age: '28 yrs',
      hobby: 'Traveling',
      reminder: false,
    },
    {
      id: 8,
      text: 'Henry P.',
      day: '9.30.22',
      age: '25 yrs',
      hobby: 'Hiking',
      reminder: false,
    },
  ])

  // Match pair
  const matchPair = () => {
    if( tasks.some(task => task.reminder === true)
    && peoples.some(people => people.reminder === true)) {
          
      setTasks(tasks.filter(
        (task) => task.reminder === false))

      setPeoples(peoples.filter(
        (people) => people.reminder === false))
      }
  }
  

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


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
    console.log(newTask);
  }
  

  // Delete (Task)
  const deleteTask = (id) => {
    console.log('delete', id)

    setTasks(tasks.filter(
      (task) => task.id !== id)
      )
  }

    // Delete (People)
    const deletePpl = (id) => {
      console.log('delete', id)
  
      setPeoples(peoples.filter(
        (people) => people.id !== id)
        )
    }

  return (
    <div className="container">
      <Header title='PoC - Matching (3.29.22)'
        onAdd={() => setShowAddTask(!showAddTask)}

        showAdd={ showAddTask } 

        onPair={matchPair}
      />

      {showAddTask && 
        <AddTask onAdd={addTask} /> // short version of ternary
      }

      <div className='body'>

        <div className="column">
          <h3 style = {{textAlign: 'center'}}>Newcomers</h3>
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder} />
          ) : (
            'No Tasks To Show'
          )}
        </div>

        <div className="column">
          <h3 style = {{textAlign: 'center'}} >Oldtimers</h3>
          {peoples.length > 0 ? (
            <Peoples peoples={peoples} 
            onDelete={deletePpl}
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