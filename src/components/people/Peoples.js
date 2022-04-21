import People from './People'

const Peoples = ({peoples, onToggle}) => {
  return (
    <>
    {peoples.map((people) => (people.display === true && people.matched === false ) && (
        <People key={people.id} 
        people={people}
        onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Peoples