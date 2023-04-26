import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Name(props) {
  return (
    <div className='name-div'>

      {/* If in edit mode, display input */}
      {props.isInEditMode
        ? <>
            <input 
              type="text"
              className='edit-name'
              maxLength='19'
              autoFocus
              onChange={ (e) => props.handleChange(e, 'fullName') }
              onKeyDown={ props.enterKeyPressed }
              defaultValue={ props.fullName }
            />
            <div className='edit-icon-div'>
              <FontAwesomeIcon className='hidden' icon={faPenToSquare} />
            </div>
          </>
          
        : 
        <>
          <div 
            className='name'> { props.fullName }
          </div>
          <div className='edit-icon-div' onClick={ props.changeEditMode } >
            <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} />
          </div>
        </>
      }
    </div>
  )
}