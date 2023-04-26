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

  function changeEditMode() {
    setPerson(prevPerson => ({...prevPerson, isInEditMode: !prevPerson.isInEditMode}));
  }

  function turnOffEditMode(e) {
    const elementType = e.target.localName
    if (person.isInEditMode && elementType !== 'input') {
      setPerson(prevPerson => ({...prevPerson, isInEditMode: false}));
    } else if (person.isInEditMode && e.key === 'Enter') {
      setPerson(prevPerson => ({...prevPerson, isInEditMode: false}));
    }
  }

  function enterKeyPressed(e) {
    const key = e.key;
    if (key === 'Enter') {
      turnOffEditMode(e);
    }
  }

  function handleChange(event, property) {
    event.stopPropagation();
    const newValue = event.target.value;
    setPerson(prevPerson => ({...prevPerson, [property]: newValue}));
  }

  return (
    <div className="App" onClick={turnOffEditMode}>
      <Header 
        fullName={person.fullName}
        profession={person.profession}
        isInEditMode={ person.isInEditMode }
        changeEditMode={changeEditMode}
        handleChange={handleChange}
        enterKeyPressed={enterKeyPressed}
      />
    </div>
  )  
}

export default App;
