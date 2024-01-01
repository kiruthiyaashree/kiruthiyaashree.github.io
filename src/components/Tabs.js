// import Box from "@mui/material/Box";
// import SchoolIcon from '@mui/icons-material/School';
import React from "react";
import '../App.css';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Interests from './Interests';
import Activities from './Activities';
import Education from "./Education";
import Skills from "./Skills";
export default function Tabs()
{
    const [e_value,setevalue]=React.useState(true);
    const [s_value,setsvalue]=React.useState(false);
    const [i_value,setivalue]=React.useState(false);
    const [a_value,setavalue]=React.useState(false);

    const handleChange = (event) =>
    {
        console.log("button clicked");
        let btn_name = event.target.name;
        // console.log(btn_name);
        if(btn_name === "Education")
        {
            // console.log(btn_name);
            setavalue(false);
            setivalue(false);
            setsvalue(false);
            setevalue(true);
        }
        else if(btn_name === "Programming Skills")
        {
            // console.log(btn_name);
            setavalue(false);
            setivalue(false);
            setsvalue(true);
            setevalue(false);
        }
        else if(btn_name === "Interests")
        {
            // console.log(btn_name);
            setavalue(false);
            setivalue(true);
            setsvalue(false);
            setevalue(false);
        }
        else if(btn_name === "Activities")
        {
            // console.log(btn_name);
            setavalue(true);
            setivalue(false);
            setsvalue(false);
            setevalue(false);
        }
    };
    return (
        <div className="flex justify-center  ">
        <div className="border border-black w-[80rem] h-[25rem] border-b-4 border-r-4 rounded-xl p-16 grid grid-cols-[1fr_3fr]">
                <div className="  p-3 rounded-tl-xl rounded-bl-xl  border-r border-black flex flex-col items-start justify-center w-fit">
                    <button name="Education" className="px-2 hover:rounded-full hover:bg-teal-300/50" onClick={handleChange}> <SchoolIcon sx={{ fontSize:30,marginY:1 }} /> Education</button>
                    <button name="Programming Skills" className="px-2 hover:rounded-full hover:bg-teal-300/50" onClick={handleChange}> <PsychologyIcon sx={{ fontSize:30,marginY:1 }}/>Programming Skills</button>
                    <button name="Interests" className="px-2 hover:rounded-full hover:bg-teal-300/50" onClick={handleChange}> <ColorLensIcon sx={{ fontSize:30,marginY:1 }} />Interests</button>
                    <button name="Activities" className="px-2 hover:rounded-full hover:bg-teal-300/50" onClick={handleChange}> <HandshakeIcon sx={{ fontSize:30,marginY:1 }} />Activities</button>

                </div>
                {/* <div className="border-r text-left flex flex-col justify-center p-3 text-lg border-black"> */}

                {/* </div> */}
                    <div className="p-3 text-lg overflow-hidden">
                    <div className="scrolling-container">
                    {
                        e_value  && 
                        <Education/>
                    }
                    {
                        s_value && 
                        <Skills/>
                    }
                    {
                        i_value && 
                        <Interests/>
                    }
                    {
                        a_value &&
                        <Activities/>
                    }
                    </div>
                    </div>
                </div>
        </div>
    );
}