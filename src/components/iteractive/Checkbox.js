import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

function Checkbox({id, toggle, onToggle}) {

    return (<> 
        {!toggle ?
        <ImCheckboxUnchecked style={{ color: 'black', cursor: 'pointer', fontSize:25  }}
        onClick={() => { onToggle(id);}
        } />
        :
        <ImCheckboxChecked style={{ color: 'black', cursor: 'pointer', fontSize:25 }}
            onClick={() => { onToggle(id);} 
        } />
        }
        </>
    )
}

export default Checkbox