import JobSectionOne from "./JobSectionOne"
import JobSectionTwo from "./JobsectionTwo"

export default function WorkExperience() {
  return (
    <div className='work-experience'>
      <h2 className='work-experience-title'>WORK EXPERIENCE</h2>
      <div className='job-sections'>
        <JobSectionOne />
        <JobSectionTwo />
      </div>
    </div>
  )
}