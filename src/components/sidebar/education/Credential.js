import CredentialName from "./CredentialName"
import UniversityName from "./UniversityName"
import UniversityYears from "./UniversityYears"

export default function Credential(
  {
    credentialName,
    universityName,
    universityYears,
    changeEditMode,
    enterKeyPressed,
    isInEditMode,
    inputContext
  }
) {
  return (
    <div className='credential-div'>
      <CredentialName
        credentialName={ credentialName }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
      <UniversityName 
        universityName={ universityName }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
      <UniversityYears 
        universityYears={ universityYears }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
      />
    </div>
  )
}