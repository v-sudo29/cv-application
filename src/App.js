import './styles/App.css'
import Header from './components/Header';
import { useState } from 'react'

function App() {
  const [person, setPerson] = useState(
    {
      fullName: 'FULL NAME',
      profession: 'PROFESSION HERE',
    }
  )

  return (
    <div className="App">
      <Header fullName={person.fullName} profession={person.profession}/>
    </div>
  );
}

export default App;
