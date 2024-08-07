import React from 'react'


const Summary = ({ numTasks }) => {
  
  return (
    <section className='bg-[#00d0f0] mx-3 mt-5 rounded-xl'>
      <div className='px-4 py-4'>
        <h1 className='text-[1.3rem] '>
          You've got {numTasks ? numTasks : 0} tasks today
        </h1>
      </div>
    </section>
  )
}

export default Summary
