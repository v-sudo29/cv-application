import Profile from "./profile/Profile"
import WorkExperience from "./work-experience/WorkExperience"

export default function Main(
  {
    profileDescription,
    isInEditMode,
    inputContext,
    changeEditMode,
    enterKeyPressed
  }) {
  return (
    <div className='main'>
      <Profile 
        profileDescription={ profileDescription }

        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
        changeEditMode={ changeEditMode }
        enterKeyPressed={ enterKeyPressed }
      
      />
      <WorkExperience />
    </div>
  )
}