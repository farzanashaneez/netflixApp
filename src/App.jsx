import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Signup from './signup'
import Profile from './profile'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
   <>
   <AuthContextProvider>
   <Navbar/>
  
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>}>Home</Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={
      <ProtectedRoute>
    <Profile/>
    </ProtectedRoute>
    }/>

   </Routes>
   </AuthContextProvider>
   </>
  )
}

export default App
