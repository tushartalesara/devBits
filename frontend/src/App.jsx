import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cryptos from './components/pages/Cryptos';
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
          <Route path='/crypto'element={<Cryptos />} />
        </Routes>
      </>
    </Router>
  )
}

export default App;
