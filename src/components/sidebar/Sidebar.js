import ContactInfo from './contact-info/ContactInfo'
import Education from './education/Education'
import Skills from './skills/Skills'

export default function Sidebar(
  {
    location,
    phone,
    email,
    linkedIn,

    credentialName,
    universityName,
    universityYears,

    skills,
    skillIndex,

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
      <Education 
        credentialName={ credentialName }
        universityName={ universityName }
        universityYears={ universityYears }
        changeEditMode={ changeEditMode }
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
      <Skills 
        skills={ skills }  
        skillIndex={ skillIndex }
        changeEditMode={ changeEditMode }
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
    </div>
  )
}