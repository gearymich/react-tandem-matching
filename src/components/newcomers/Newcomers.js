import Newcomer from './Newcomer'

const Newcomers = ({newcomers, onDelete, onToggle}) => {
  return (
    <>
    {newcomers.map((newcomer) => (newcomer.display === true && newcomer.matched === false) && (
        <Newcomer key={newcomer.id} 
        newcomer={newcomer}
        onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Newcomers