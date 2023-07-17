import Login from './containers/login'
import Signup from './containers/signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index path='' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
