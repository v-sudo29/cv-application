import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Phone(props) {
  return (
    <div className='contact-info phone-div'>
      <div className='contact-icon'><FontAwesomeIcon icon={faPhone} /></div>
      
      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'phone')
        ? <div className='contact-text'>  
            <input 
              type="text"
              className='contact-edit edit-phone'
              maxLength='24'
              autoFocus
              onChange={ (e) => props.handleChange(e, 'phone') }
              onKeyDown={ props.enterKeyPressed }
              defaultValue={ props.phone }
            />
          </div>
        : <div className='contact-text phone-text'>
            {props.phone}
            <div className='edit-icon-div phone' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='phone-edit-icon contact-edit-icon phone' icon={faPenToSquare} />
            </div>
          </div>
      }

    </div>
  )
}