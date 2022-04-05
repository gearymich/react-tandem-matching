
import { RiArrowDownSLine } from 'react-icons/ri'

const Button = ({color, text, onClick, textsize, arrow}) => {

    return (
        <button onClick={onClick} 
        style= {{backgroundColor: color, fontSize: textsize, alignItems: "center"}} className='btn'>
        {text} {'   '}
        {arrow==='true' &&
            <><RiArrowDownSLine style={{fontSize: '20px'}}/></>} 
        </button>
    )
}

export default Button