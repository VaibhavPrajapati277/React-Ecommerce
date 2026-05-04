import './App.css'
import Login from './assets/components/Login'
import Resetpass from './assets/components/Resetpass'
import Signup from './assets/components/Signup'
import Home from './assets/pages/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
          <Route path="/reset" element={<Resetpass />} />  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
