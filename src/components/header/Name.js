import { useState } from 'react'
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
    <div className='name-div'>

      {/* If in edit mode, display input */}
      {(isInEditMode && inputContext === 'fullName')
        ? <>
            <input 
              type="text"
              className='edit-name'
              maxLength='19'
              autoFocus
              onChange={ (e) => {
                  handleChange(e, 'fullName') 
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