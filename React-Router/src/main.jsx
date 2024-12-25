import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

/*
const router = createBrowserRouter(
createRoutesFromElements(
<Route path = '/' element= {<Layout/>}
<Route path = "" element = {<Home/>} />
<Route path = "about" element = {<About/>}/>
<Route path = "contact" element = {<Contact/>} 
/>

)
)

*/
const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "User/:UserId",
        element: <User/>
      },
      {
        path: "Github",
        element: <Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
