import Button from './iteractive/Button'

const Header = ({ title, onPair }) => {
  return (
    <header className='header'>
      <h1> {title} </h1>
      <Button
        className="btn"
        color='steelblue'
        text='Match Pair'
        onClick={ onPair }/>
    </header>
  )
}

export default Header