import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function UniversityYears(props) {
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
    <div className='university-years'>
      {(props.isInEditMode && props.inputContext === 'universityYears')
        ? <input 
            type="text"
            className='education-edit edit-university-years'
            maxLength='24'
            autoFocus
            onChange={ (e) => {
                props.handleChange(e, 'universityYears')
                handleUserTyping(e)
              }
            }
            onKeyDown={ props.enterKeyPressed }
            defaultValue={ userTyped ? props.universityYears : '' }
            placeholder={ userTyped ? '' : '2020-2025' }
          />
        : <>
            { props.universityYears }
            <div className='edit-icon-div universityYears' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='university-years-edit-icon education-edit-icon universityYears' icon={faPenToSquare} />
            </div> 
          </>
      }
    </div>
  )
}