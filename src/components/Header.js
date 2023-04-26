export default function Header(props) {
  return (
    <div className='header'>
      <div className='name'>{props.fullName}</div>
      <div className='profession'>{props.profession}</div>
    </div>
  )
}