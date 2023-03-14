import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  useEffect(()=>{
    console.log(isLoggedIn);
  });
  return (
    <>
      <Navbar />
      <Routes>
        {isLoggedIn && <Route path='/user' element={<Home />} />}
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
