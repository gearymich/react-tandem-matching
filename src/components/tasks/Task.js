import { FaTimes } from 'react-icons/fa'
import Checkbox from './Checkbox'
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} // template literal
      onDoubleClick={() => onToggle(task.id)}>

      <h3>
        {task.text} {' '}
        <Checkbox />
      </h3>
      <p>Registered: {task.day}</p>
      <p>Age: {task.age} <br/> Hobbies: {task.hobby}</p>

    </div>
  )
}

export default Task