import './styles/App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(
    {
      fullName: 'FULL NAME',
      profession: 'PROFESSION HERE',
      location: 'City, State',
      phone: '(123) 456-7890',
      email: 'yourname@gmail.com',
      linkedIn: 'linkedinaddress.com',
      credentialName: 'B.A. Name of Major',
      universityName: 'Name of University',
      universityYears: '2020-2025',
      skills: ['Figma', 'Illustrator', 'Adobe Photoshop', 'Prototyping', 'Wireframing', 'UX/UI Design']
    }
  )

  const [editMode, setEditMode] = useState(
    {
      isInEditMode: false,
      inputContext: '',
      skillIndex: 0
    }
  )

  function changeEditMode(e) {
    e.stopPropagation()
    const inputFullName = e.target.parentElement.classList.contains('fullName')
    const inputProfession = e.target.parentElement.classList.contains('profession')
    const inputLocation = e.target.parentElement.classList.contains('location')
    const inputPhone = e.target.parentElement.classList.contains('phone')
    const inputEmail = e.target.parentElement.classList.contains('email')
    const inputLinkedIn = e.target.parentElement.classList.contains('linkedIn')
    const inputCredentialName = e.target.parentElement.classList.contains('credentialName')
    const inputUniversityName = e.target.parentElement.classList.contains('universityName')
    const inputUniversityYears = e.target.parentElement.classList.contains('universityYears')
    const inputSkill = e.target.parentElement.classList.contains('skills')

    if (inputFullName) {
      setEditMode(prevEdit => ({
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
    } else if (inputLinkedIn) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'linkedIn'
        }
      ));
    } else if (inputCredentialName) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'credentialName'
        }
      ));
    } else if (inputUniversityName) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'universityName'
        }
      ));
    } else if (inputUniversityYears) {
      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'universityYears'
        }
      ));
    } else if (inputSkill) {
      const skillIndex = parseInt(e.target.parentElement.parentElement.id);

      setEditMode(prevEdit => (
        {
          isInEditMode: !prevEdit.isInEditMode,
          inputContext: 'skills',
          skillIndex: skillIndex
        }
      ));
    }
  }

  function turnOffEditMode(e) {
    const elementType = e.target.localName
    const valueContext = editMode.inputContext;
    const currentDomNode = document.getElementById('currentInput')

    if (editMode.isInEditMode && elementType !== 'input') {

      submitInputValue(currentDomNode.value, valueContext);
      setEditMode({isInEditMode: false, inputContext: '', index: ''});
      return

    } else if (editMode.isInEditMode && e.key === 'Enter') {

      submitInputValue(currentDomNode.value, valueContext)
      setEditMode({isInEditMode: false, inputContext: '', index: ''});
      return
    }
  }

  function enterKeyPressed(e) {
    const key = e.key;
    if (key === 'Enter') {
      turnOffEditMode(e);
    }
  }

  function submitInputValue(value, property) {
    const index = editMode.skillIndex

    // Update skill array
      if (property === 'skills') {
        
        // Delete skill if empty
        if (/^\s*$/.test(value)) {    
          let skillsArrCopy = person.skills
          skillsArrCopy.splice(index, 1)
    
          setPerson(prevPerson => ({...prevPerson, [property]: skillsArrCopy}));
          return
        } 

        // Modify skill
        else if (!/^\s*$/.test(value)) {
          const newSkills = person[property].map((skill, currentIndex) => {
            return (
              currentIndex === index ? value : skill
            )
          })
          setPerson(prevPerson => ({...prevPerson, [property]: newSkills}));
          return

        }
      } 
      
    // Update other properties
    else {
      setPerson(prevPerson => ({...prevPerson, [property]: value}));
    }
  }

  function handleChange(e, property) {
    e.stopPropagation();
    const newValue = e.target.value;
    const index = parseInt(e.target.parentElement.parentElement.parentElement.id);

    if (property === 'skills') {

      if (/^\s*$/.test(newValue)) {
        console.log('empty value!!!')
  
        let skillsArrCopy = person.skills
        skillsArrCopy.splice(index, 1)
  
        console.log(skillsArrCopy)
  
        setPerson(prevPerson => ({...prevPerson, [property]: skillsArrCopy}));
        return
      }

      const newSkills = person[property].map((skill, currentIndex) => {
        return (
          currentIndex === index ? newValue : skill
        )
      })
      setPerson(prevPerson => ({...prevPerson, [property]: newSkills}));
    } else {
      setPerson(prevPerson => ({...prevPerson, [property]: newValue}));
    }
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
        linkedIn={ person.linkedIn }

        credentialName={ person.credentialName }
        universityName={ person.universityName }
        universityYears={ person.universityYears }

        skills={ person.skills }
        skillIndex={ editMode.skillIndex }

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