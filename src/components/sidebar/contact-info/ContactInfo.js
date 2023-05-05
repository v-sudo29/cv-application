import Location from './Location'
import Phone from './Phone'
import Email from './Email'
import LinkedIn from './LinkedIn'

export default function ContactInfo(
  {
    location,
    phone,
    email,
    linkedIn,
    changeEditMode,
    enterKeyPressed,
    isInEditMode,
    inputContext
  }
) {
  return (
    <div className='contact-info-div'>
      <Location 
        location={ location }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
      <Phone 
        phone={ phone }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
      <Email 
        email={ email }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
      <LinkedIn 
        linkedIn={ linkedIn }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
    </div>
  )
}