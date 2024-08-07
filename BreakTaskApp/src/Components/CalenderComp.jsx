import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarComp = () => {
  const [date, setDate] = useState(new Date())

  const onChange = newDate => {
    setDate(newDate)
  }

  return (
    <div className='flex justify-center mt-3 pb-5'>
      <div className='w-[95%] bg-[#51ccd7] rounded-2xl '>
        <h2 className='text-center text-[1.5rem] mb-4 text-[#ff2788] mt-2 '>
          Task Calendar
        </h2>
        <Calendar
          onChange={onChange}
          value={date}
          className='m-auto custom-calendar w-[94%] rounded-2xl '
        />
        <div className='my-4 text-center text-[#F9F9F9] text-[1.2rem]'>
          Selected Date:{' '}
          <span className='selected-date '>{date.toDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default CalendarComp
