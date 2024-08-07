import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Summary from './Components/Summary.jsx'
import Projection from './Components/Projection.jsx'
import CalendarComp from './Components/CalenderComp.jsx'
import TaskList from './Components/TaskList.jsx'
import CompletionBar from './Components/CompletionBar.jsx'

function App () {
  //State from Navbar component
  const [tasks, setNewtasks] = useState([])
  const addTask = newTask => {
    setNewtasks([...tasks, newTask])
  }

  // Filtering the tasks based on their tags then storing in array using "filter"
  const urgentTasks = tasks.filter(task => task.tag === 'Urgent')
  const upcomingTasks = tasks.filter(task => task.tag === 'Upcoming')
  const reviewTasks = tasks.filter(task => task.tag === 'Review')

  // State from TaskList Component
  const [checkedTask, setCheckedTask] = useState([])
  const inCompleteTask = tasks.length - checkedTask.length

  return (
    <div className='overflow-y-auto'>
      <Navbar addTask={addTask} />
      <Summary numTasks={inCompleteTask} />
      <Projection
        reviewTasks={reviewTasks}
        urgentTasks={urgentTasks}
        upcomingTasks={upcomingTasks}
      />
      <CompletionBar tasks={tasks} />
      <CalendarComp />
      <TaskList
        tasks={tasks}
        setCheckedTask={setCheckedTask}
        checkedTask={checkedTask}
        reviewTasks={reviewTasks}
        urgentTasks={urgentTasks}
        upcomingTasks={upcomingTasks}
      />
      {/* <TaskList tasks={tasks} checkedTask={checkedTask}/> */}
    </div>
  )
}

export default App
