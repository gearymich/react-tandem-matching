import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>
          {task.text} {' '}
        </h3>
        <p style={{color: 'white'}}>Registered: {task.day}</p>
        <p style={{color: 'white'}}>Age: {task.age} </p>
        <p style={{color: 'white'}}>Hobbies: {task.hobby}</p>
        {!btnText &&  // short version of ternary
        <> 
          <p style={{color: 'white'}}>Thing 1: {task.hobby}</p>
          <p style={{color: 'white'}}>Thing 2: {task.hobby}</p>
          <p style={{color: 'white'}}>Thing 3: {task.hobby}</p>
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
          
        <div style={btnText ? { padding:'32px'} : {padding : '32px'}}/>

        {!btnText &&  // short version of ternary
        <>
        <div style={{padding:'20px'}}/> 
        <Button
          color='#F397AF'
          text='Description'
          // onClick={() => setBtnText(!btnText)}
          />
        </>
        }
        
        <div style={{verticalAlign: 'bottom'}}>
        <Button
          color='#E72658'
          text={btnText ? 'More...' : 'Less...' }
          onClick={() => setBtnText(!btnText)}
          />
        </div>
      </div>
    </div>
  )
}

export default Task