import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SignUp from './components/SignUp';
import Posts from './components/Posts';

const App = () => {
  let user = localStorage.getItem('organicUser')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={user === null ? <Navigate to="/signup" /> : <Posts />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={user === null ? <Navigate to="/signup" replace /> : <Navigate to="/posts" replace />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App