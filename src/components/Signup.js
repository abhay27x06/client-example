import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    const [user, setuser]=useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate=useNavigate();
    function handleinput(e)
    {
        setuser({...user, [e.target.name]: e.target.value});
    }
    async function register(e)
    {
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:4000/signup', {
                name:user.name,
                email:user.email,
                password:user.password
            });
            const data=await res.data;
            if (data.message==="false") {
                window.alert('Invalid Data Entered');
            }else{
                window.alert('User Registered Succesfully');
                navigate('/signin');
            }
            console.log(data);
        }catch(err)
        {
            console.log(err);
        }
    }
    return (
        <div className='con'>
            <form className='form' onSubmit={register}>
                <div>
                    <h2>SignUp</h2>
                </div>
                <div>
                    <input type='text' placeholder='Name' className='input' name='name' onChange={handleinput} value={user.name}/>
                </div>
                <div>
                    <input type='email' placeholder='Email' className='input' name='email' value={user.email} onChange={handleinput}/>
                </div>
                <div>
                    <input type='password' placeholder='password' className='input' name='password' value={user.password} onChange={handleinput}/>
                </div>
                <div className='btndiv'>
                    <button type='submit' className='btn'>Signup</button>
                </div>
            </form>
        </div>
    )
}
export default Signup;