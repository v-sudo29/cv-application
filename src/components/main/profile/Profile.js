export default function Profile() {
  const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis, magna in sagittis tincidunt, purus mi finibus libero, vehicula ullamcorper ipsum ligula sit amet massa. Donec viverra condimentum sem eget suscipit. Praesent aliquam tincidunt quam ut sodales. Ut vestibulum sem ut erat congue vehicula. Integer massa dui, tristique eu tellus in, vulputate malesuada nisi. Proin non venenatis purus.'
  return (
    <div className='profile'>
      <h2 className='profile-title'>PROFILE</h2>
      <p className='profile-text'>{dummyText}</p>
    </div>
  )
}