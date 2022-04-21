import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';

const Local = ({ local, onToggle }) => {
  
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>
          {local.text} {' '}
        </h3>
        <p>Language: {local.language}</p>
        <p>Age: {local.age} yrs </p>
        <p>Hobbies: {local.hobby}</p>
        {!btnText &&  // short version of ternary
        <> 
          <p>Family: {local.family}</p>
          <p>Address: {local.address}</p>
          <p>Availability: {local.available}</p>
        </>        
        }
      </div>

      <div className='tright' >
        <div style={{verticalAlign: 'top'}}>   
          <Checkbox 
            id={local.id}
            toggle={local.reminder}
            onToggle={onToggle} />
        </div>
          
        <div style={btnText ? { padding:'32px'} : {padding : '32px'}}/>

        {!btnText &&  // short version of ternary
          <>
          <div style={{padding:'20px'}}/> 
          <Button color='#F397AF' text='Description'/>
          </>
        }

        <div style={{verticalAlign: 'bottom'}}>
          <Button color = '#E72658'
            text={btnText ? 'More...' : 'Less...' }
            onClick={() => setBtnText(!btnText)}
          />
        </div>
      </div>
    </div>
  )
}

export default Local