import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
function Signin() {
    const dispatch=useDispatch();
    const [user, setuser]=useState({
        email: '',
        password: ''
    });
    const navigate=useNavigate();
    function handleinput(e)
    {
        setuser({...user, [e.target.name]: e.target.value});
    }
    async function login(e)
    {
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:4000/signin', {
                email:user.email,
                password:user.password
            });
            const data=await res.data;
            console.log(data);
            if (data.message==="false") {
                window.alert('Invalid Data Entered');
            }else{
                window.alert('User Logged In Succesfully');
                dispatch(authActions.login());
                navigate('/user');
            }
        }catch(err)
        {
            console.log(err);
        }
    }
    return (
        <div className='con'>
            <form className='form' onSubmit={login}>
                <div>
                    <h2>SignIn</h2>
                </div>
                <div>
                    <input type='email' placeholder='Email' className='input' name='email' value={user.email} onChange={handleinput}/>
                </div>
                <div>
                    <input type='password' placeholder='password' className='input' name='password' value={user.password} onChange={handleinput}/>
                </div>
                <div className='btndiv'>
                    <button type='submit' className='btn'>Signin</button>
                </div>
            </form>
        </div>
    )
}
export default Signin;