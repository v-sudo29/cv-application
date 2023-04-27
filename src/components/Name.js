import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Name(
  {
    isInEditMode,
    inputContext,
    handleChange,
    enterKeyPressed,
    fullName,
    changeEditMode
  }
) {
  return (
    <div className='name-div'>

      {/* If in edit mode, display input */}
      {(isInEditMode && inputContext === 'fullName')
        ? <>
            <input 
              type="text"
              className='edit-name'
              maxLength='19'
              autoFocus
              onChange={ (e) => handleChange(e, 'fullName') }
              onKeyDown={ enterKeyPressed }
              defaultValue={ fullName }
            />
            <div className='edit-icon-div fullName'>
              <FontAwesomeIcon className='hidden' icon={faPenToSquare} />
            </div>
          </>
        : 
        <>
          <div className='name'> 
            { fullName }
          </div>
          <div className='edit-icon-div fullName' onClick={ changeEditMode } >
            <FontAwesomeIcon className='name-edit-icon' icon={faPenToSquare} />
          </div>
        </>
      }
    </div>
  )
}