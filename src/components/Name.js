export default function Name(props) {
  return (
    <div className='name-div'>
      <div onClick={ props.editMode } className='name'>{ props.fullName }</div>
    </div>
  )
}