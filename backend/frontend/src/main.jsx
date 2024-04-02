import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import TaskList from './component/TaskList.jsx'
import Create from './component/Create.jsx'
import Update from './component/Update.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <TaskList/>
  },
  {
    path:"create",
    element: <Create/>
  },
  {
    path:"update/:_id",
    element:<Update/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
