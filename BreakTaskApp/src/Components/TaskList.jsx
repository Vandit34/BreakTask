import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react'

// const [status, setStatus] = useState(true)

const TaskList = ({
  urgentTasks,
  upcomingTasks,
  reviewTasks,
  checkedTask,
  setCheckedTask
}) => {
  const handleCheckedTask = task => {
    // "prev" : it represents the "checkedTask" state
    setCheckedTask(prev => {
      if (prev.includes(task)) {
        //It is used to remove the tasks which got "unchecked after get checked"
        //Each tasks from "prev" array gets "filtered" by only returning "unique task" (not repreating the similar task)
        task.completed = false
        return prev.filter(t => t !== task)
      } else {
        task.completed = true
        return [...prev, task]
      }
    })
  }

  return (
    <section className='flex justify-center rounded-xl mt-3 pb-5'>
      <div className='bg-[#f8297c] w-[95%] rounded-2xl py-4 px-3'>
        <h2 className='text-[1.5rem] text-black'> My Tasks</h2>
        <Tabs variant='soft-rounded' colorScheme='green' className='mt-4'>
          <TabList className='w-[98%] bg-white px-4 py-1 rounded-3xl'>
            <Tab _selected={{ color: 'black', bg: '#FFC0D9' }}>Urgent</Tab>
            <Tab _selected={{ color: 'black', bg: '#FFC0D9' }}>Upcoming</Tab>
            <Tab _selected={{ color: 'black', bg: '#FFC0D9' }}>Review</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {urgentTasks.map((value, key) => (
                <div
                  key={key}
                  className='bg-[#00eaff] px-3 py-3 rounded-xl flex mt-3'
                >
                  <input
                    type='checkbox'
                    className='large-checkbox'
                    checked={checkedTask.includes(value)}
                    onChange={() => handleCheckedTask(value)}
                  ></input>
                  <div className='ml-5 md:flex justify-between w-full'>
                    {/* Task Content */}
                    <div>
                      <h1 className='md:text-[1.4rem] text-[1.2rem]'>
                        {value.Heading}
                      </h1>
                      <p>{value.Content}</p>
                    </div>
                    {/* Badge for tasks */}
                    <div className='mt-2'>
                      <span className='md:text-sm bg-[#FF6F91] text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              {upcomingTasks.map((value, key) => (
                <div
                  key={key}
                  className='bg-[#00eaff] px-3 py-3 rounded-xl flex mt-3'
                >
                  <input
                    type='checkbox'
                    className='large-checkbox'
                    onChange={() => handleCheckedTask(value)}
                    checked={checkedTask.includes(value)}
                  ></input>
                  <div className='ml-5 md:flex justify-between w-full'>
                    {/* Task Content */}
                    <div>
                      <h1 className='md:text-[1.4rem] text-[1.2rem]'>
                        {value.Heading}
                      </h1>
                      <p>{value.Content}</p>
                    </div>
                    {/* Badge for tasks */}
                    <div className='mt-2'>
                      <span className='bg-[#70D6B1] text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              {reviewTasks.map((value, key) => (
                <div
                  key={key}
                  className='bg-[#00eaff] px-3 py-3 rounded-xl flex mt-3'
                >
                  <input
                    type='checkbox'
                    className='large-checkbox'
                    onChange={() => handleCheckedTask(value)}
                    checked={checkedTask.includes(value)}
                  ></input>
                  <div className='ml-5 md:flex justify-between w-full'>
                    {/* Task Content */}
                    <div>
                      <h1 className='md:text-[1.4rem] text-[1.2rem]'>
                        {value.Heading}
                      </h1>
                      <p>{value.Content}</p>
                    </div>
                    {/* Badge for tasks */}
                    <div className='mt-2'>
                      <span className='bg-[#FFF0B3] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
                        Review
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  )
}

export default TaskList

{
  /* <span className='md:text-sm bg-[#FF6F91] text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
                              Urgent
                            </span> */
}

{
  /* Populate the badges according to some parameter which will tell which badge to be implemented */
}

{
  /* <span className='bg-[#70D6B1] text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
                        Upcoming
                      </span>
                      <span className='bg-[#FFF0B3] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
                        Review
                      </span> */
}
