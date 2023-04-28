import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function CredentialName(props) {
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
    <div className='credential-name'>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'credentialName')
        ? <input 
            type="text"
            className='education-edit edit-credential-name'
            maxLength='24'
            autoFocus
            onChange={ (e) => {
                props.handleChange(e, 'credentialName')
                handleUserTyping(e)
              }
            }
            onKeyDown={ props.enterKeyPressed }
            defaultValue={ userTyped ? props.credentialName : '' }
            placeholder={ userTyped ? '' : 'B.A. Name of Major' }
          />
        : <>
            { props.credentialName }
            <div className='edit-icon-div credentialName' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='credential-name-edit-icon education-edit-icon credentialName' icon={faPenToSquare} />
            </div>
          </>
      }
    </div>
    
  )
}