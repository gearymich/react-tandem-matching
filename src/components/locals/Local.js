import { FaTimes } from 'react-icons/fa'
import Checkbox from '../iteractive/Checkbox'
import Button from '../iteractive/Button'
import React, { useState } from 'react';
import Description from '../iteractive/Description'


const Local = ({ local, onToggle }) => {
  
  const [btnText, setBtnText] = useState(true);

  return (
    <div className='token' /* template literal*/ > 
      <div className='tleft'>
        <h3 style={{color: 'white'}}>
          {local.text} {' '}
        </h3>
        <p>Sprache(n): {local.language}</p>
        <p>Alter: {local.age} yrs </p>
        <p>Hobbys: {local.hobby}</p>
        {!btnText &&  // short version of ternary
        <> 
          <p>Familie: {local.family}</p>
          <p>Adresse: {local.address}</p>
          <p>Verfügbarkeit: {local.available}</p>
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
          <Description/>
          </>
        }

        <div style={{verticalAlign: 'bottom'}}>
          <Button color = '#E72658'
            text={btnText ? 'Mehr...' : 'Weniger...' }
            onClick={() => setBtnText(!btnText)}
          />
        </div>
      </div>
    </div>
  )
}

export default Local