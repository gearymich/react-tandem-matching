import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='task' /* template literal*/ > 

      <h3>
        {task.text} {' '}
        <Checkbox 
          id={task.id}
          toggle={task.reminder}
          onToggle={onToggle}
        />
      </h3>
      
      <p>Registered: {task.day}</p>
      <p>Age: {task.age} <br/> Hobbies: {task.hobby}</p>

    </div>
  )
}

export default Task