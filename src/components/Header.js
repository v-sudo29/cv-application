import Name from "./Name";
import Profession from "./Profession";

export default function Header(props) {
  return (
    <header className='header'>
      <Name
        isInEditMode={ props.isInEditMode } 
        changeEditMode={ props.changeEditMode } 
        fullName={ props.fullName }
        handleChange={ props.handleChange }
        enterKeyPressed={ props.enterKeyPressed }
      />
      <Profession 
        profession={ props.profession }
        editMode={ props.editMode }
      />
    </header>
  )
}