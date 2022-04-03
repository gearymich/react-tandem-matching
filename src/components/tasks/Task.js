import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';




const Task = ({ task, onDelete, onToggle }) => {
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3>
          {task.text} {' '}
        </h3>
        <p>Registered: {task.day}</p>
        <p>Age: {task.age} </p>
        <p>Hobbies: {task.hobby}</p>
        {!btnText &&  // short version of ternary
        <> 
          <p>Thing 1: {task.hobby}</p>
          <p>Thing 2: {task.hobby}</p>
          <p>Thing 3: {task.hobby}</p>
        </>
         
      }
      </div>

      <div className='tright' >
        <div style={{verticalAlign: 'top'}}>
        <Checkbox 
          id={task.id}
          toggle={task.reminder}
          onToggle={onToggle} />
        </div>

        {!btnText &&  // short version of ternary
        <>
        <div style={{padding:'20px'}}/> 
        <Button
          color='lightgrey'
          text='Description'
          // onClick={() => setBtnText(!btnText)}
          />
        </>
        }
        <div style={btnText ? { padding:'15px'} : {padding : '5px'}}/>
        <div style={{verticalAlign: 'bottom'}}>
        <Button
          color='grey'
          text={btnText ? 'More...' : 'Less...' }
          onClick={() => setBtnText(!btnText)}
          />
        </div>
      </div>
    </div>
  )
}

export default Task