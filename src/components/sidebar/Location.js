import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Location(props) {
  return (
    <div className='contact-info location-div'>
      <div className='contact-icon'><FontAwesomeIcon icon={faLocationDot} /></div>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'location')
        ? <div className='contact-text'>  
            <input 
              type="text"
              className='contact-edit edit-location'
              maxLength='24'
              autoFocus
              onChange={ (e) => props.handleChange(e, 'location') }
              onKeyDown={ props.enterKeyPressed }
              defaultValue={ props.location }
            />
          </div>
        : <>
            <div className='contact-text location-text'>
              {props.location}
              <div className='edit-icon-div location' onClick={ props.changeEditMode } >
                  <FontAwesomeIcon className='location-edit-icon contact-edit-icon location' icon={faPenToSquare} />
              </div>
            </div>
          </>
      }
      
    </div>
  )
}