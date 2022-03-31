import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'

const People = ({ people, onDelete, onToggle }) => {
  return (
    <div className='task' /* template literal*/>

      <h3>
        {people.text} {' '}
        <Checkbox 
          id={people.id}
          toggle={people.reminder}
          onToggle={onToggle}
        />
      </h3>
      
      <p>Registered: {people.day}</p>
      <p>Age: {people.age} <br/> Hobbies: {people.hobby}</p>

    </div>
  )
}

export default People