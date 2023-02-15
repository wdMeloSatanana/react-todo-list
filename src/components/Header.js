import PropTypes from 'prop-types'
import Button from './Button'

 const Header = ({ title, onAdd, showAdd }) => {
 
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close':'Add'} 
                onClick={onAdd} 
            />
             

        </header>
  )
}
//Default properties
Header.defaultProps = {
    title: 'Task Tracker'
}
//Proptypes usage
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// CSS in React
// const headingStyle = {
//      color: 'red',
//      backgroundColor:'black',
// }

export default Header