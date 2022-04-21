import Local from './Local'

const Locals = ({locals, onToggle}) => {
  return (
    <>
    {locals.map((local) => (local.display === true && local.matched === false ) && (
        <People key={local.id} 
        local={local}
        onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Locals