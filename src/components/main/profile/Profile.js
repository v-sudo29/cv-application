import useUserTypingHandler from '../../../useUserTypingHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {
  const {userTyped, handleUserTyping} = useUserTypingHandler()

  return (
    <div className='profile'>
      <h2 className='profile-title'>PROFILE</h2>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'profileDescription')
        ? <div className='profile-textarea'>
            <textarea 
              id='currentInput'
              className='profile-description-edit edit-profile-description profile-description-textarea'
              maxLength='412'
              autoFocus
              onChange={ (e) => {
                  handleUserTyping(e)
                }
              }
              onKeyDown={ props.enterKeyPressed }
              defaultValue={ userTyped ? props.profileDescription : '' }
              placeholder={ userTyped ? '' : 'Profile description' }
            />
            <br />
          </div>
        : <div className='profile-text-div'>
            <div className='profile-text'>
              {props.profileDescription}
            </div>
            <div className='edit-icon-div paragraph-edit-div profileDescription' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='profile-description-edit-icon profile-description-edit-icon profileDescription' icon={faPenToSquare} />
            </div>
          </div>
      }

    </div>
  )
}