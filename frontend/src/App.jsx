import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './routes/ProtectedRoute';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/home' element={<HomePage/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
