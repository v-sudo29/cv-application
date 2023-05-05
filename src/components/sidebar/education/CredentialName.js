import useUserTypingHandler from '../../../useUserTypingHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function CredentialName(props) {
  const {userTyped, handleUserTyping} = useUserTypingHandler()
  
  return (
    <div className='credential-name'>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'credentialName')
        ? <input 
            id='currentInput'
            type="text"
            className='education-edit edit-credential-name'
            maxLength='24'
            autoFocus
            onChange={ (e) => {
                // props.handleChange(e, 'credentialName')
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