import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import CreateTask from '../CreateTask.jsx'
import Brand from '../assets/BreakTaskLogo1.png'

const Navbar = ({ addTask }) => {
  const [openTask, setOpenTask] = useState(false)

  const close = () => setOpenTask(false)
  const open = () => setOpenTask(true)

  return (
    <>
      <section className='flex justify-between mt-4 mx-2 items-center mb-10'>
        {/* <nav>
          <FaBars className='text-[1.6rem] bg-[#FFC0D9] text-white cursor-pointer p-1 rounded-md hover:bg-[#fc5f9d]' />
        </nav> */}
        {/* <h1 className='font-Bungee text-2xl text-[#e30ba6] '>BreakTask</h1> */}
        <img src={Brand} className='w-40 md:w-48 ' />
        <button
          className='text-white text-xl mr-4 bg-[#FF90BC] px-3 py-1 rounded-xl hover:bg-[#ff4690] cursor-pointer'
          onClick={open}
        >
          Create Task
        </button>
      </section>
      {openTask && <CreateTask onClose={close} onSave={addTask} />}
      {/* <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      /> */}
    </>
  )
}

export default Navbar
