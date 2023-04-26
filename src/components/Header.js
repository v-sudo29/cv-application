import Name from "./Name";
import Profession from "./Profession";

export default function Header(
  {
    fullName,
    profession,
    isInEditMode,
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
        changeEditMode={ changeEditMode } 
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
      />
      <Profession 
        profession={ profession }
        isInEditMode={ isInEditMode }
        changeEditMode={ changeEditMode } 
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed } 
      />
    </header>
  )
}