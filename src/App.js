import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/tasks/Tasks'
import AddTask from './components/tasks/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Doctors appointment',
    day: '28.3.22',
    reminder: true,
  },
  {
    id: 2,
    text: 'Football game',
    day: '5.4.22',
    reminder: false,
  },
  {
    id: 3,
    text: 'Dance recital',
    day: '24.5.22',
    reminder: true,
  },
  ])

  const [people, setPeoples] = useState([
    {
      id: 4,
      name: 'Doctors appointment',
      dob: '28.3.22',
      chosen: true,
    },
    {
      id: 5,
      name: 'Football game',
      dob: '5.4.22',
      chosen: false,
    },
    {
      id: 6,
      name: 'Dance recital',
      dob: '24.5.22',
      chosen: true,
    },
    ])
  

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder }
        : task
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

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)

    setTasks(tasks.filter(
      (task) => task.id !== id)
      )
  }

  const name = 'Michael'

  return (
    <div className="container">
      <Header title='michael'
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={ showAddTask } 
      />

      {showAddTask && 
        <AddTask onAdd={addTask} /> // short version of ternary
      }

      <div className='body'>
        <div className="column">
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder} />
          ) : (
            'No Tasks To Show'
          )}
        </div>

        <div className="column">
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder} />
          ) : (
            'No Tasks To Show'
          )}
        </div>

      </div>
    </div>
  );
}

export default App;