import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';
import Description from '../iteractive/Description'

const Newcomer = ({ newcomer, onToggle }) => {
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>{newcomer.text} {' '}</h3>
        <p>Sprache(n): {newcomer.language}</p>
        <p>Alter: {newcomer.age} yrs</p>
        <p>Hobbys: {newcomer.hobby}</p>

        {!btnText &&  // short version of ternary
          <> 
            <p>Familie: {newcomer.family}</p>
            <p>Adresse: {newcomer.address}</p>
            <p>Verfügbarkeit: {newcomer.available}</p>
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
        <Description/>
        </>
        }
        
        <div style={{verticalAlign: 'bottom'}}>
        <Button color='#E72658'
          text={btnText ? 'Mehr...' : 'Weniger...' }
          onClick={() => setBtnText(!btnText)}
          />
        </div>
      </div>
    </div>
  )
}

export default Newcomer