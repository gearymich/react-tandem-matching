import { FaTimes } from 'react-icons/fa'

const People = ({ people, onDelete, onToggle }) => {
  return (
    <div className={`people ${people.reminder ? 'reminder' : ''}`} // template literal
      onDoubleClick={() => onToggle(people.id)}>

      <h3>
        {people.text} {' '}
        <FaTimes style={{ color: 'red', cursor: 'pointer'}}
          onClick={ () => onDelete(people.id) } />
      </h3>
      
      <p>{people.day}</p>

    </div>
  )
}

export default People