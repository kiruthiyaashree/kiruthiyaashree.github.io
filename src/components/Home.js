import Profile from '../images/profile.png';
import Logo from '../images/Logo.png';
import { useEffect, useState } from 'react';
import '../App.css'
// import Sidebar from "./Sidebar";

import {  GitHub, LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";

export default function Home()
{
    const [text,setText]=useState(' ');
    const profession_text="Web Developer";
    useEffect(()=>
    {
        let currentIndex=0;
        const typingEffect=setInterval(()=>
        {
            if (currentIndex<=profession_text.length)
            {
                setText(profession_text.substring(0,currentIndex));
                currentIndex+=1;
            }
            else{
                currentIndex=0;
                setText(' ');
            }
        },150);
        return ()=>clearInterval(typingEffect);
    },[]);
    return (
        <div className="home md:h-[50rem]  lg:h-[40rem] w-full">
        <span  className='flex justify-end'>
         <img src={Logo} className='h-[3rem] m-4'  alt='try reloading'/>
         </span>
         <div className='md:grid md:grid-cols-2'>
        <div className='h-full my-12 flex justify-center items-center w-full'>
            <img src={Profile} className='border border-black border-b-4 rounded-full p-1 h-[25rem] profile'  alt='try reloading'/>
            </div>
            <div className="flex flex-col md:items-start sm:items-center justify-center info">    
                <p className='bold mb-2 home_text'>I am Kiruthiyaashree</p>
                <p className=' home_text lg:mr-24'>{text}</p>
                <br/>
                <div className="sm:flex sm:justify-center sm:items-center links">
                <a target="blank" href="https://www.instagram.com/kiruthiyaashreesp/"><Instagram/></a>
                <a target="blank" href="https://www.linkedin.com/in/kiruthiyaashree-s-p/"><LinkedIn/></a>
                <a target="blank" href="https://github.com/kiruthiyaashree"><GitHub  /></a>
            </div>
            </div>
            </div>
            <div>
        </div>
        {/* <Sidebar/> */}
        </div>
    );
}