import { Copyright, GitHub, LinkedIn, Mail, PhoneSharp } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { Instagram } from "@mui/icons-material";
 
export default function Footer()
{
    return (
        <div className="">
        <Divider sx={{
            m:2,
            borderColor:"black",
            borderWidth: '1px', 
        }}/>
        <div className="text-center m-4 rounded-lg bg-gradient-to-b from-teal-50 to-emerald-200 pt-10">
            <h1 className="text-2xl -tracking-wide">KIRUTHIYAASHREE S P</h1>
            <br/>
            <div>
                <a target="blank" href="https://www.instagram.com/kiruthiyaashreesp/"><Instagram/></a>
                <a target="blank" href="www.linkedin.com/in/kiruthiyaashree-s-p"><LinkedIn /></a>
                <a target="blank" href="https://github.com/kiruthiyaashree"><GitHub  /></a>
            </div>
            <br/>
            <br/>
            <div className="flex justify-center">
                <Mail/>
                <p>kiruthiyaashreesp@gmail.com</p>
            </div>
            <br/>
            <div className="flex justify-center">
                <PhoneSharp/>
                <p>+91 84380 05578</p>
            </div>
             <br/>
            <br/>
            <p>
            <Copyright/>
                Kiruthiyaashree, All rights reserved.
            </p>
            <br/>
            <br/>
            <br/>
        </div>
        </div>
    );
}