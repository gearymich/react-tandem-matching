import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
    {tasks.map((task) => (task.display === true && task.matched === false) && (
        <Task key={task.id} 
        task={task}
        onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Tasks