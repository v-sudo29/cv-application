import useUserTypingHandler from '../../../useUserTypingHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function UniversityYears(props) {
  const {userTyped, handleUserTyping} = useUserTypingHandler()

  return (
    <div className='university-years'>
      {(props.isInEditMode && props.inputContext === 'universityYears')
        ? <input 
            id='currentInput'
            type="text"
            className='education-edit edit-university-years'
            maxLength='24'
            autoFocus
            onChange={ (e) => {
                // props.handleChange(e, 'universityYears')
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