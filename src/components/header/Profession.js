import useUserTypingHandler from '../../useUserTypingHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Profession(
  {
    isInEditMode,
    inputContext,
    enterKeyPressed,
    profession,
    changeEditMode
  }
) {
  const {userTyped, handleUserTyping} = useUserTypingHandler()

  return (
    <div className='profession-div'>
      {/* If in edit mode, display input */}
      {(isInEditMode && inputContext === 'profession')
        ? <>
            <input 
              id='currentInput'
              type="text"
              className='edit-profession'
              maxLength='25'
              autoFocus
              onChange={ (e) => {
                  handleUserTyping(e)
                }
              }
              onKeyDown={ enterKeyPressed }
              defaultValue={ userTyped ? profession : '' }
              placeholder={ userTyped ? '' : undefined }
            />
            <div className='edit-icon-div'>
              <FontAwesomeIcon className='hidden' icon={faPenToSquare} />
            </div>
          </>
        : <>
            <div className='profession'>
              { userTyped ? profession : 'PROFESSION'}
            </div>
            <div className='edit-icon-div profession' onClick={ changeEditMode } >
              <FontAwesomeIcon className='profession-edit-icon profession' icon={faPenToSquare} />
            </div>
          </>
      }
    </div>
  )
}