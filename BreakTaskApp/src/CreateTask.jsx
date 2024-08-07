import React, { useState } from 'react';
import Field from './Field.js';
import { GiCancel } from 'react-icons/gi';

const CreateTask = ({ onClose, onSave }) => {
  const [task, setTask] = useState({
    property: '',
    value: '',
    date: '',
    tag: 'Urgent', 
    completed: false
  });

  // updateChange function is used to change the input field
  const updateChange = e => {
    const { name, value, type, checked, scrollHeight, style } = e.target;
    if (style) {
      style.height = 'auto';
      style.height = `${scrollHeight}px`;
    }

    setTask(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));

    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(task);
    onClose(); 
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50 overflow-y-auto'>
      <form
        className='flex flex-col bg-white border-black border-[0.4rem] rounded-xl w-[90%] px-4 py-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-row-reverse'>
          <GiCancel
            className='text-[1.7rem] cursor-pointer hover:text-red-600'
            onClick={onClose}
          />
          <div className='w-full text-center text-[1.7rem]'>
            <p>Create Task</p>
          </div>
        </div>
        <div>
          {Field.map((value, key) => (
            <div className='mt-6' key={key}>
              <label className='text-[1.7rem]'>{value.fieldname}</label>
              <textarea
                className='text-[1.2rem] w-full p-2 mt-1 border-[0.2rem] outline-none rounded-md border-[#FFC0D9] contentHeight'
                name={value.fieldname}
                value={task[value.fieldname] || ''}
                onChange={updateChange}
                placeholder={value.placeholder}
              />
            </div>
          ))}
          <div className='mt-6'>
            <label className='text-[1.7rem]'>Tag</label>
            <select
              className='text-[1.2rem] w-full p-2 mt-1 border-[0.2rem] rounded-md border-[#FFC0D9]'
              name='tag'
              value={task.tag}
              onChange={updateChange}
            >
              <option value='Urgent' className=' bg-[#FF6F61] text-white'>
                Urgent
              </option>
              <option value='Upcoming' className=' bg-[#08ace8] text-white'>
                Upcoming
              </option>
              <option value='Review' className=' bg-[#77DD77] text-white'>
                Review
              </option>
            </select>
          </div>

          <div className='mt-6'>
            <label className='block mb-1 text-[1.7rem]'>Date:</label>
            <input
              type='date'
              name='date'
              value={task.date}
              onChange={updateChange}
              className='w-full p-2 border-[0.2rem] rounded-md border-[#FFC0D9]'
            />
          </div>

          {/* <div className='mt-6'>
            <label className='block mb-1 text-[1.7rem]'>Completed:</label>
            <input
              type='checkbox'
              name='completed'
              checked={task.completed}
              onChange={updateChange}
              className='w-full p-2 border-[0.2rem] rounded-md border-[#FFC0D9]'
            />
          </div> */}
        </div>
        <div className='flex justify-center mt-5'>
          <button
            className='bg-green-300 hover:bg-green-400 p-1 px-4 rounded-lg text-[1.2rem]'
            type='submit'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
