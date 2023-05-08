export default function JobSectionOne() {
  const dummyDescription = 'Donec dignissim, libero a ullamcorper aliquam, mauris ipsum egestas nibh, a vehicula mi magna quis ipsum. In mollis non tellus in gravida. Nunc pulvinar purus placerat ipsum ultricies euismod. Suspendisse molestie tellus placerat enim tempor, vitae pretium tortor tristique. Donec dignissim, libero a ullamcorper aliquam, mauris ipsum egestas nibh, a vehicula mi magna quis ipsum.'

  return (
    <div className='job-section-one'>
      <div className='general-job-info'>
        <div className='job-title-one'>FIRST JOB TITLE</div>
        <div className='company-info'>
          <div>Company Name</div>
          <div>Location</div>
          <div>2012-2014</div>
        </div>
      </div>
      <div className='job-description'>{dummyDescription}</div>
    </div>
  )
}