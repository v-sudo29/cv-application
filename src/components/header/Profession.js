import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Profession(
  {
    isInEditMode,
    inputContext,
    handleChange,
    enterKeyPressed,
    profession,
    changeEditMode
  }
) {
  return (
    <div className='profession-div'>
      {/* If in edit mode, display input */}
      {(isInEditMode && inputContext === 'profession')
        ? <>
            <input 
              type="text"
              className='edit-profession'
              maxLength='19'
              autoFocus
              onChange={ (e) => handleChange(e, 'profession') }
              onKeyDown={ enterKeyPressed }
              defaultValue={ profession }
            />
            <div className='edit-icon-div'>
              <FontAwesomeIcon className='hidden' icon={faPenToSquare} />
            </div>
          </>
        : <>
            <div className='profession'>
              { profession }
            </div>
            <div className='edit-icon-div profession' onClick={ changeEditMode } >
              <FontAwesomeIcon className='profession-edit-icon profession' icon={faPenToSquare} />
            </div>
          </>
      }
    </div>
  )
}