import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Stocks from './components/pages/Stocks';
const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/sign-up' element={< Signup />} />
          <Route path='/login' element={< Login />} />
          <Route path='/stocks' element={< Stocks />} />
        </Routes>
      </>
    </Router>
  )
}

export default App;
