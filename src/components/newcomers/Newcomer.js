import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';

const Newcomer = ({ newcomer, onToggle }) => {
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>{newcomer.text} {' '}</h3>
        <p>Language: {newcomer.language}</p>
        <p>Age: {newcomer.age} yrs</p>
        <p>Hobbies: {newcomer.hobby}</p>

        {!btnText &&  // short version of ternary
          <> 
            <p>Family: {newcomer.family}</p>
            <p>Address: {newcomer.address}</p>
            <p>Availability: {newcomer.available}</p>
          </>  
        }
      </div>

      <div className='tright' >
        <div style={{verticalAlign: 'top'}}>   
          <Checkbox 
            id={newcomer.id}
            toggle={newcomer.reminder}
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

export default Newcomer