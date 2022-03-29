import People from './People'

const Peoples = ({peoples, onDelete, onToggle}) => {
  return (
    <>
    {peoples.map((people) => (
        <Task key={people.id} 
        people={people}
        onToggle={onToggle}
        onDelete={onDelete}/>
    ))}
    </>
  )
}

export default Peoples