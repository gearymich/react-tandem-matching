import { FaTimes } from 'react-icons/fa'

const People = ({ people, onDelete, onToggle }) => {
  return (
    <div className={`people ${people.reminder ? 'reminder' : ''}`} // template literal
      onDoubleClick={() => onToggle(people.id)}>

      <h3>
        {people.text} {' '}
        {/* <FaTimes style={{ color: 'red', cursor: 'pointer'}}
          onClick={ () => onDelete(people.id) } /> */}
      </h3>
      
      <p>Registered: {people.day}</p>
      <p>Age: {people.age} <br/> Hobbies: {people.hobby}</p>

    </div>
  )
}

export default People