import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
axios.defaults.withCredentials=true;
let firstrender=true;
function Home()
{
    const [user, setuser]=useState({name:'',email:''});
    const refreshToken=async ()=>{
        console.log('refreshToken Function');
        const res=await axios.get('http://localhost:4000/refresh', {
            withCredentials: true
        }).catch((err)=>{
            console.log(err);
        });
        const data=await res.data;
        setuser({
            name: data.name,
            email: data.email
        });
    }
    async function getuser()
    {
        const res=await axios.get('http://localhost:4000/user', {
            withCredentials: true
        });
        const data=await res.data;
        setuser({
            name: data.name,
            email: data.email
        });
    }
    useEffect(()=>{
        let interval;
            getuser();
            console.log('else waala part');
            interval=setInterval(() => {
                console.log('setinterval');
                refreshToken();
            }, 5000);
        return ()=>clearInterval(interval);
    },[]);
    return (
        <div>
            {user && <h1>Welcome {user.name}</h1>}
        </div>
    )
}
export default Home;