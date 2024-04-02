import React from 'react'
import TaskList from './component/TaskList'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div>
    <Outlet></Outlet>
    </div>
  )
}

export default App
