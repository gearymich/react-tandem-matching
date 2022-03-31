import Button from './iteractive/Button'

const onClick = () => {
  console.log('click')
}

const Header = ({ title, onAdd, showAdd, onPair }) => {
  return (
    <header className='header'>
      <h1> {title} </h1>
      {/* <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add Newcomer'}
        onClick={ onAdd }/> */}

      <Button 
        color='steelblue'
        text='Match Pair'
        onClick={ onPair }/>
    </header>
  )
}

export default Header