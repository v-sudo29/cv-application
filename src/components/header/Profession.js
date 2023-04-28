import { useState } from 'react'
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
    <div className='profession-div'>
      {/* If in edit mode, display input */}
      {(isInEditMode && inputContext === 'profession')
        ? <>
            <input 
              type="text"
              className='edit-profession'
              maxLength='19'
              autoFocus
              onChange={ (e) => {
                  handleChange(e, 'profession')
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