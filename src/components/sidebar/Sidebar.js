import ContactInfo from './ContactInfo'

export default function Sidebar(
  {
    location,
    phone,
    email,
    linkedIn,
    changeEditMode,
    handleChange,
    enterKeyPressed,
    isInEditMode,
    inputContext
  }
) {
  return (
    <div className='sidebar-div'>
      <ContactInfo 
        location={ location }
        phone={ phone }
        email={ email }
        linkedIn={ linkedIn }
        changeEditMode={ changeEditMode }
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
    </div>
  )
}