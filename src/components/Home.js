import Logo from '../images/profile.png';
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
        <div className="home grid grid-cols-2 h-[40rem] w-full">
        <div className='h-full my-12 flex justify-center items-center w-full'>
            <img src={Logo} className='border border-black border-b-4 rounded-full p-1 h-[25rem] '  alt='try reloading'/>
            </div>
            <div className="flex flex-col items-start justify-center">    
                <p className='flex justify-end bold text-[2rem] mb-2'>I am Kiruthiyaashree</p>
                <p className='flex justify-end text-2xl mr-24'>{text}</p>
                <br/>
                <div>
                <a target="blank" href="https://www.instagram.com/kiruthiyaashreesp/"><Instagram/></a>
                <a target="blank" href="https://www.linkedin.com/in/kiruthiyaashree-s-p/"><LinkedIn/></a>
                <a target="blank" href="https://github.com/kiruthiyaashree"><GitHub  /></a>
            </div>
            </div>
            <div>
        </div>
        {/* <Sidebar/> */}
        </div>
    );
}