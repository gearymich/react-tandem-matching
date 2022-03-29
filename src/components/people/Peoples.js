import People from './People'

const Peoples = ({peoples, onDelete, onToggle}) => {
  return (
    <>
    {peoples.map((people) => (
        <People key={people.id} 
        people={people}
        onToggle={onToggle}
        onDelete={onDelete}/>
    ))}
    </>
  )
}

export default Peoples