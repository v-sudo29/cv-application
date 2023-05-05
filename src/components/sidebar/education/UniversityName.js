import useUserTypingHandler from '../../../useUserTypingHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function UniversityName(props) {
  const {userTyped, handleUserTyping} = useUserTypingHandler()

  return (
    <div className='university-name'>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'universityName')
        ? <input 
            id='currentInput'
            type="text"
            className='education-edit edit-university-name'
            maxLength='40'
            autoFocus
            onChange={ (e) => {
                handleUserTyping(e)
              }
            }
            onKeyDown={ props.enterKeyPressed }
            defaultValue={ userTyped ? props.universityName : '' }
            placeholder={ userTyped ? '' : 'Name of University' }
          />
        : <>
            { props.universityName }
            <div className='edit-icon-div universityName' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='university-name-edit-icon education-edit-icon universityName' icon={faPenToSquare} />
            </div>          
          </> 
      }
    </div>
  )
}