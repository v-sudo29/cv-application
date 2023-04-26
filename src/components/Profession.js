export default function Profession(props) {
  return (
    <div className='profession-div'>
        <div onClick={ props.editMode } className='profession'>{ props.profession }</div>
    </div>
  )
}