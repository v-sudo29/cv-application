import './styles/App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(
    {
      fullName: 'FULL NAME',
      profession: 'PROFESSION HERE',
      location: 'Street Name, City, State',
      phone: '(123) 456-7890',
      email: 'yourname@gmail.com',
      linkedInAddress: 'linkedinaddress.com'
    }
  )

  const [editMode, setEditMode] = useState(
    {
      isInEditMode: false,
      inputContext: ''
    }
  )

  function changeEditMode(e) {
    const inputFullName = e.target.parentElement.classList.contains('fullName')
    const inputProfession = e.target.parentElement.classList.contains('profession')
    const inputLocation = e.target.parentElement.classList.contains('location')
    const inputPhone = e.target.parentElement.classList.contains('phone')
    const inputEmail = e.target.parentElement.classList.contains('email')

    console.log('clicked!')

    if (inputFullName) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'fullName'
        }
      ));
    } else if (inputProfession) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'profession'
        }
      ));
    } else if (inputLocation) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'location'
        }
      ));
    } else if (inputPhone) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'phone'
        }
      ));
    } else if (inputEmail) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'email'
        }
      ));
    }
  }

  function turnOffEditMode(e) {
    const elementType = e.target.localName
    if (editMode.isInEditMode && elementType !== 'input') {
      setEditMode({isInEditMode: false, inputContext: ''});
    } else if (editMode.isInEditMode && e.key === 'Enter') {
      setEditMode({isInEditMode: false, inputContext: ''});
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
        fullName={ person.fullName }
        profession={ person.profession }
        isInEditMode={ editMode.isInEditMode }
        inputContext={ editMode.inputContext }
        changeEditMode={ changeEditMode }
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
      />
      <Sidebar 
        location={ person.location }
        phone={ person.phone }
        email={ person.email }
        isInEditMode={ editMode.isInEditMode }
        inputContext={ editMode.inputContext }
        changeEditMode={ changeEditMode }
        handleChange={ handleChange }
        enterKeyPressed={ enterKeyPressed }
      />
    </div>
  )  
}

export default App;
