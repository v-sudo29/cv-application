import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function UniversityName(props) {
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
    <div className='university-name'>

      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'universityName')
        ? <input 
            type="text"
            className='education-edit edit-university-name'
            maxLength='40'
            autoFocus
            onChange={ (e) => {
                props.handleChange(e, 'universityName')
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