import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'


const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3>
          {task.text} {' '}
        </h3>
        <p>Registered: {task.day}</p>
        <p>Age: {task.age} </p>
        <p>Hobbies: {task.hobby}</p>
      </div>

      <span className='tright'>
          <Checkbox 
            id={task.id}
            toggle={task.reminder}
            onToggle={onToggle} />
          <br/>
          <br/>
          <Button
            color='grey'
            text='More...' />
      </span>
    </div>
  )
}

export default Task

{/* <h3>
{task.text} {' '}
<Checkbox 
  id={task.id}
  toggle={task.reminder}
  onToggle={onToggle}
/>
</h3>

<p>Registered: {task.day}</p>
<p>Age: {task.age} </p>
<p style={{textAlign : 'right'}}>Hobbies: {task.hobby}</p>
<Button 
color='grey'
text='More...'
/> */}