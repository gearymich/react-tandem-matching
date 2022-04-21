import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';

const Task = ({ task, onToggle }) => {
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>{task.text} {' '}</h3>
        <p>Language: {task.language}</p>
        <p>Age: {task.age} yrs</p>
        <p>Hobbies: {task.hobby}</p>

        {!btnText &&  // short version of ternary
          <> 
            <p>Family: {task.family}</p>
            <p>Address: {task.address}</p>
            <p>Availability: {task.available}</p>
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
          />
        </>
        }
        
        <div style={{verticalAlign: 'bottom'}}>
        <Button color='#E72658'
          text={btnText ? 'More...' : 'Less...' }
          onClick={() => setBtnText(!btnText)}
          />
        </div>
      </div>
    </div>
  )
}

export default Task