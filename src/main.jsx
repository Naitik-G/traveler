import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Sections from './Sections.jsx'
import France from './components/Accommodations/France.jsx'
import India from './components/Accommodations/India.jsx'
import Japan from './components/Accommodations/japan.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Sections />
      },
      {
        path: "/france",
        element: <France />
      },
      {
        path: "/india",
        element: <India />
      },
      {
        path: "/japan",
        element: <Japan />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
