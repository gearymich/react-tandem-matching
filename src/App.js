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
    reminder: true,
  },
  {
    id: 2,
    text: 'Grace G.',
    day: '5.4.22',
    reminder: false,
  },
  {
    id: 3,
    text: 'Phillip J.',
    day: '24.5.22',
    reminder: true,
  },
  ])
  const [peoples, setPeoples] = useState([
    {
      id: 4,
      text: 'Bill B.',
      day: '2.2.22',
      reminder: false,
    },
    {
      id: 5,
      text: 'Joe L.',
      day: '9.30.19',
      reminder: false,
    },
    {
      id: 6,
      text: 'Jane A.',
      day: '1.14.18',
      reminder: true,
    },
  ])
  

  // Toggle Reminder (Tasks)
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder }
        : task
      )
    )
  }

    // Toggle Reminder (People)
    const toggleReminderPpl = (id) => {
      setPeoples(
        peoples.map((people) => 
        people.id === id ? 
          { ...people, reminder: !people.reminder }
          : people
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