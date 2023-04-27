import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Profession(props) {
  return (
    <div className='profession-div'>
      {/* If in edit mode, display input */}
      {(props.isInEditMode && props.inputContext === 'profession')
        ? <>
            <input 
              type="text"
              className='edit-profession'
              maxLength='19'
              autoFocus
              onChange={ (e) => props.handleChange(e, 'profession') }
              onKeyDown={ props.enterKeyPressed }
              defaultValue={ props.profession }
            />
            <div className='edit-icon-div'>
              <FontAwesomeIcon className='hidden' icon={faPenToSquare} />
            </div>
          </>
        : <>
            <div className='profession'>
              { props.profession }
            </div>
            <div className='edit-icon-div profession' onClick={ props.changeEditMode } >
              <FontAwesomeIcon className='profession-edit-icon profession' icon={faPenToSquare} />
            </div>
          </>
      }
    </div>
  )
}