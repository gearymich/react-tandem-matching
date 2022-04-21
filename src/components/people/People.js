import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';

const People = ({ people, onToggle }) => {
  
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>
          {people.text} {' '}
        </h3>
        <p>Language: {people.language}</p>
        <p>Age: {people.age} yrs </p>
        <p>Hobbies: {people.hobby}</p>
        {!btnText &&  // short version of ternary
        <> 
          <p>Family: {people.family}</p>
          <p>Address: {people.address}</p>
          <p>Availability: {people.available}</p>
        </>        
        }
      </div>

      <div className='tright' >
        <div style={{verticalAlign: 'top'}}>   
          <Checkbox 
            id={people.id}
            toggle={people.reminder}
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

export default People