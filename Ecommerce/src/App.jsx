import './App.css'
import Login from './assets/components/Login'
import Resetpass from './assets/components/Resetpass'
import Signup from './assets/components/Signup'
import Home from './assets/pages/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Productdetails from './assets/pages/Productdetails'
import CartProvider from './context/Cartcontext'

function App() {

  
  return (
    
    <>
      <CartProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            
            <Home />
            
          } /> 
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
          <Route path="/reset" element={<Resetpass />} />  
           <Route path="/product/:id" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
          </CartProvider>
    </>
  )
}

export default App
