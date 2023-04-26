import Name from "./Name";
import Profession from "./Profession";

export default function Header(props) {
  return (
    <div className='header'>
      <Name 
        editMode={ props.editMode } 
        fullName={ props.fullName }
      />
      <Profession 
        profession={ props.profession }
        editMode={ props.editMode }
      />
    </div>
  )
}