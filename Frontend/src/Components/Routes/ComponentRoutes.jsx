import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../Home';
import Register from '../Register';
import LoginPage from '../LoginPage';
import Dashboard from '../Dashboard';
import ReportUpload from '../ReportUpload';

function ComponentRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/reportupload' element={<ReportUpload />}></Route>
      </Routes>
    </div>
  )
}

export default ComponentRoutes
