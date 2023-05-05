import useUserTypingHandler from '../../useUserTypingHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Name(
  {
    isInEditMode,
    inputContext,
    enterKeyPressed,
    fullName,
    changeEditMode
  }
) {
  const {userTyped, handleUserTyping} = useUserTypingHandler()

  return (
    <div className='name-div'>

      {/* If in edit mode, display input */}
      {(isInEditMode && inputContext === 'fullName')
        ? <>
            <input 
              id='currentInput'
              type="text"
              className='edit-name'
              maxLength='19'
              autoFocus
              onChange={ (e) => {
                  handleUserTyping(e)
                }
              }
              onKeyDown={ enterKeyPressed }
              defaultValue={ userTyped ? fullName : '' }
              placeholder={ userTyped ? '' : undefined }
            />
            <div className='edit-icon-div fullName'>
              <FontAwesomeIcon className='hidden' icon={faPenToSquare} />
            </div>
          </>
        : 
        <>
          <div className='name'> 
            { userTyped ? fullName : 'FULL NAME'}
          </div>
          <div className='edit-icon-div fullName' onClick={(e) => changeEditMode(e) } >
            <FontAwesomeIcon className='name-edit-icon fullName' icon={faPenToSquare} />
          </div>
        </>
      }
    </div>
  )
}