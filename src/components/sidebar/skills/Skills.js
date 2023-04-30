import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import uniqid from 'uniqid'

export default function Skills(props) {
  const [userTyped, setUserTyped] = useState(false)

  function handleUserTyping(e) {
    const value = e.target.value
    // Check if input value is empty
    if (!/^\s*$/.test(value)) {
      setUserTyped(prevTyped => true)
    } else if (/^\s*$/.test(value)) {
      setUserTyped(prevTyped => false)
    }
  }

  const allSkills = props.skills.map((skill, index) => {
    const id = uniqid();
    console.log(parseInt(props.skillIndex) === index)

      return (
        <div className='skills-item' key={index} id={index}>
          {(props.isInEditMode && props.inputContext === 'skills' && parseInt(props.skillIndex) === index)
            ? <li> 
                <span>
                  <input 
                    type="text"
                    className='skills-edit edit-skills'
                    maxLength='24'
                    autoFocus
                    onChange={ (e) => {
                        props.handleChange(e, 'skills')
                        handleUserTyping(e)
                      }
                    }
                    onKeyDown={ props.enterKeyPressed }
                    defaultValue={ userTyped ? '' : '' }
                    placeholder={ userTyped ? '' : '' }
                  />
                </span>
              </li>
            : <>
                <li><span>{skill}</span></li>
                <div className='edit-icon-div skills' onClick={ (e) => props.changeEditMode(e) } id={index}>
                  <FontAwesomeIcon className='skills-edit-icon skills-edit-icon skills' icon={faPenToSquare} />
                </div>
              </>
          }
        </div>
      )
    }
  )
  return (
    <div className='skills-div'>
      <div className='skills-title'>SKILLS</div>
      <div className='skills-content'>
        <ul>
          { allSkills }
        </ul>
      </div>
    </div>
  )
}