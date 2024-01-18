import Divider from '@mui/material/Divider';
import Logo from '../images/profile.png';
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
                <div className='p-3 about_me grid grid-cols-[4fr_2fr] shadow-xl w-[60%] rounded-md bg-emerald-100/50'>
                    <div className='flex flex-col justify-center'>
                        <br/>
                            <p className='text-justify text-lg'>Looking for an exciting opportunity where I can contribute with enthusiasm and engagement to nurture the company's growth while enhancing my knowledge.</p>
                            <br/>
                            <br/>
                            {/* <div className='flex justify-center'>
                                <button className='border rounded-xl border-black w-fit px-2 py-1 hover:bg-white font-semibold'>Get Resume</button>
                            </div> */}
                    </div>
                    <div className=''>
                        <img src={Logo} alt='try reloading'/>
                    </div>
                </div>
                </div>


        </div>
    );
}