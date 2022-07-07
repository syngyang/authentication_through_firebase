import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import ProtectedPage from '../pages/ProtectedPage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='login' element={<Loginpage />} />
          <Route path='register' element={<Registerpage />} />
          <Route path='profile' element={<Profilepage />} />
          <Route path='protected-page' element={<ProtectedPage />} />
          <Route path='forgot-password' element={<ForgotPasswordPage />} />
          <Route path='reset-password' element={<ResetPasswordPage />} />
          <Route path='*' element={NotfoundPage} />
        </Routes>
      </Router>
    </>
  )
}
