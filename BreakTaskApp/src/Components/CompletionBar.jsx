import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import moment from 'moment'

const ExampleBarChart = ({
  urgentTasks,
  upcomingTasks,
  reviewTasks,
  tasks
}) => {
  const getPast7DaysCompletionData = tasks => {
    const past7Days = []
    for (let i = 0; i < 7; i++) {
      past7Days.push(moment().subtract(i, 'days').format('YYYY-MM-DD'))
    }

    const completionData = past7Days.reverse().map(date => ({
      name: date,
      uv: tasks.filter(
        task =>
          task.completed && moment(task.date).format('YYYY-MM-DD') === date
      ).length
    }))

    return completionData
  }

  const data = getPast7DaysCompletionData(tasks)

  const customToolTip = (value, name, props) => {
    return [`${value}`, 'Tasks Completed']
  }

  return (
    <div className='flex justify-center '>
      <div className='w-[95%] bg-[#37afba] mt-3 py-6 pr-5 rounded-2xl '>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart width={600} height={300} data={data}>
            <XAxis dataKey='name' tick={{ fill: '#ffffff' }} />
            <YAxis tick={{ fill: '#ffffff' }} />
            <Tooltip formatter={customToolTip} />
            <Bar dataKey='uv' fill='#ff2788' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ExampleBarChart
