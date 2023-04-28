import Credential from "./Credential"

export default function Education(
  {
    credentialName,
    universityName,
    universityYears,
    changeEditMode,
    handleChange,
    enterKeyPressed,
    isInEditMode,
    inputContext
  }
) {
  return (
    <div className='education-div'>
      <div className='education-title'>EDUCATION</div>
      <div className='education-content'>
        <Credential 
          credentialName={ credentialName }
          universityName={ universityName }
          universityYears={ universityYears }
          changeEditMode={ changeEditMode }
          handleChange={ handleChange }
          enterKeyPressed={ enterKeyPressed }
          isInEditMode={ isInEditMode }
          inputContext={ inputContext }
        />
      </div>
    </div>
  )
}