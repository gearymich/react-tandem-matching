import Button from './iteractive/Button'

const NameFilters = ({onPair}) => {
    return (
        <div className='nfilters'>
            <h3 style = {{textAlign: 'center', paddingLeft: '20%'}}>Newcomers</h3>
            <Button className="btn" color='grey' text='Match Pair' 
            onClick={ onPair } textsize='18px'/>
            <h3 style = {{textAlign: 'center', paddingRight: '20%'}}>Oldtimers</h3>
        </div>
    )
  }
  
  export default NameFilters