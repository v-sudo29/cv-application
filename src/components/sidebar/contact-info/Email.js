import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Email(props) {
  const [userTyped, setUserTyped] = useState(false)

  function handleUserTyping(e) {
    const value = e.target.value
    // Check if input value is empty
    if (!/^\s*$/.test(value)) {
      setUserTyped(prevTyped => true)
    } else if (/^\s*$/.test(value)) {
      setUserTyped(prevTyped => false)
    }
  }

  return (
    <div className='contact-info email-div'>
      <div className='contact-icon'><FontAwesomeIcon icon={faEnvelope} /></div>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'email')
        ? <div className='contact-text'>  
            <input 
              type="text"
              className='contact-edit edit-email'
              maxLength='27'
              autoFocus
              onChange={ (e) => {
                  props.handleChange(e, 'email')
                  handleUserTyping(e)
                }
              }
              onKeyDown={ props.enterKeyPressed }
              defaultValue={ userTyped ? props.email : '' }
              placeholder={ userTyped ? '' : 'yourname@email.com' }
            />
          </div>
        : <div className='contact-text email-text'>
            {props.email}
            <div className='edit-icon-div email' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='email-edit-icon contact-edit-icon email' icon={faPenToSquare} />
            </div>
          </div>

      }
    </div>
  )
}