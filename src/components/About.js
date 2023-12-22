import Divider from '@mui/material/Divider';
import Logo from '../images/profile1.jpg';
export default function About()
{
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-semibold'>About Me</h2>
                <h5 className='p-3'>Why Choose Me?</h5>
                <Divider sx={{
                    width:200,
                    borderColor:"black",
                    borderWidth: '2px', 
                }}/>
                </div>

                <br/>
                <br/>

                <div className='flex justify-center'>
                <div className='p-10 grid grid-cols-[2fr_4fr] shadow-xl w-[60%] rounded-md bg-emerald-100/50'>
                    <div className='mx-3'>
                    <img src={Logo} alt='try reloading'/>
                    </div>
                    <div className='flex flex-col justify-center mx-2'>
                        <br/>
                            <p className='text-justify text-lg'>Full stack web development with background knowledge of MERN stacks with redux, along with knack of building applications with utmost efficiency. Strong professional development with MySQL.</p>
                            <br/>

                            <ul className='list-disc p-3'>
                                <li>React Js</li>
                                <li>UI Design</li>
                                <li>HTML, CSS, JAVASCRIPT</li>
                            </ul>
                            <br/>
                            <br/>
                            <div className='flex justify-center'>
                                <button className='border rounded-xl border-black w-fit px-2 py-1 hover:bg-white font-semibold'>Get Resume</button>
                            </div>
                    </div>
                </div>
                </div>


        </div>
    );
}