import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

function Checkbox({id, toggle, onToggle}) {

    return (<> 
        {!toggle ?
        <ImCheckboxUnchecked style={{ color: 'black', cursor: 'pointer' }}
        onClick={() => { onToggle(id);}
        } />
        :
        <ImCheckboxChecked style={{ color: 'black', cursor: 'pointer' }}
            onClick={() => { onToggle(id);} 
        } />
        }
        </>
    )
}

export default Checkbox