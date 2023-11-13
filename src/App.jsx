// import React from 'react'
// import ToDo from './ToDoApp/ToDo'
// import './ToDoApp/Style.css'

// const App = () => {
//   return (
//     <>
//     <ToDo/>
//     </>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './CRUD/Home'
import Read from './CRUD/Read'
import Update from './CRUD/Update'
import Create from './CRUD/Create'
import './CRUD/Style.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

