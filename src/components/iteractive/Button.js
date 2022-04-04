
const Button = ({color, text, onClick, textsize}) => {

    return (
        <button onClick={onClick} 
        style= {{backgroundColor: color, fontSize: textsize, alignItems: "center"}} className='btn'>
        {text}
        </button>
    )
}

export default Button