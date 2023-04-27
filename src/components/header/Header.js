import Name from "./Name";
import Profession from "./Profession";

export default function Header(
  {
    fullName,
    profession,
    isInEditMode,
    inputContext,
    changeEditMode,
    handleChange,
    enterKeyPressed
  }
) {
  return (
    <header className='header'>
      <Name
        fullName={ fullName }
        isInEditMode={ isInEditMode } 
        inputContext={ inputContext }
        changeEditMode={ changeEditMode } 
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
      />
      <Profession 
        profession={ profession }
        isInEditMode={ isInEditMode }
        inputContext={ inputContext }
        changeEditMode={ changeEditMode } 
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed } 
      />
    </header>
  )
}