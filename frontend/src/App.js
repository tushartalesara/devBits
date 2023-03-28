import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/sign-up' element={< Signup />} />
          <Route path='/login' element={< Login />} />
        </Routes>
      </>
    </Router>
  )
}

export default App;
