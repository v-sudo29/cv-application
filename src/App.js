import './styles/App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(
    {
      fullName: 'FULL NAME',
      profession: 'PROFESSION HERE',
      isInEditMode: false
    }
  )

  function goToEditMode() {
    console.log('go into edit mode');
  }

  return (
    <div className="App">
      <Header 
        fullName={person.fullName}
        profession={person.profession}
        editMode={goToEditMode}
      />
    </div>
  )  
}

export default App;
