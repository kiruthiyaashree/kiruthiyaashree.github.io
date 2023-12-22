import { Copyright, Facebook, GitHub, Instagram, LinkedIn, Mail, PhoneSharp } from "@mui/icons-material";
import { Divider } from "@mui/material";


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
                <Facebook sx={{p:3}}/>
                <Instagram sx={{p:3}}/>
                <LinkedIn sx={{p:3}}/>
                <GitHub sx={{p:3}}/>
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