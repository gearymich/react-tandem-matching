import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import React, { useState } from 'react';

function Checkbox() {
    const [check_, setCheck] = useState(false);

    return (<> 
        {check_ ?
        <ImCheckboxUnchecked style={{ color: 'black', cursor: 'pointer' }}
        onClick={() => { setCheck(!check_);}
        } />

        :
        <ImCheckboxChecked style={{ color: 'black', cursor: 'pointer' }}
            onClick={() => { setCheck(!check_);} 
        } />
        }
        </>
    )
}

export default Checkbox