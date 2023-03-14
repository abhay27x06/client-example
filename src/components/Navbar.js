import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { authActions } from '../store/index.js';
import './Navbar.css';
axios.defaults.withCredentials=true;
function CollapsibleExample() {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const sendlogout=async ()=>{
    const res=await axios.post('http://localhost:4000/logout', null, {
      withCredentials: true
    });
    return res;
  }
  function handlelogout()
  {
    const res=sendlogout();
    dispatch(authActions.logout());
  }
  return (
    <Navbar className='navbar' expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className='logo-text'>A B H A Y</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {!isLoggedIn && <><NavLink to="/signin" className='nav-link'>Signin</NavLink>
            <NavLink to="/signup" className='nav-link'>Signup</NavLink></>}
            {isLoggedIn && <NavLink to="/signup" className='nav-link' onClick={handlelogout}>Signout</NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CollapsibleExample;