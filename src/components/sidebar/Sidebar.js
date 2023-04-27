import ContactInfo from './ContactInfo'

export default function Sidebar(
  {
    location,
    changeEditMode,
    handleChange,
    enterKeyPressed,
    isInEditMode,
    inputContext,
    phone
  }
) {
  return (
    <div className='sidebar-div'>
      <ContactInfo 
        location={ location }
        phone={ phone }
        changeEditMode={ changeEditMode }
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
    </div>
  )
}