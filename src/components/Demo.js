import Divider from '@mui/material/Divider';
import Demo1 from '../images/demo1.png';
import Demo2 from '../images/demo2.png';
import Demo3 from '../images/demo3.png';


export default function Demo()
{
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-semibold'>Projects Demo</h2>
                <h5 className='p-3'>Details</h5>
                <Divider sx={{
                    width:200,
                    borderColor:"black",
                    borderWidth: '2px', 
                }}/>
            </div>

            <div className='mx-32 grid grid-cols-3'>
                <div className=' w-[15rem]'>
                        <div className="">
                            <img src={Demo1} className='h-[10rem] w-[15rem]' alt='try reloading' />
                        </div>
                        <div className="">
                            <p className="font-bold">QuickBite</p>
                            <p className="text-justify">Designed an food-based website to explore my HTML, CSS and Javascript knowledge.</p>
                        </div>  
                </div>
                <div className=' w-[15rem]'>
                        <div className="">
                            <img src={Demo2} className='h-[10rem] w-[15rem]' alt='try reloading' />
                        </div>
                        <div className="">
                        <p className="font-bold">Online Quiz Management System</p>
                        <p className="text-justify">Developed a Java-based application with JavaFXML for the front-end and utilized MySQL for the backend.</p>
                        </div>  
                </div>
                <div className=' w-[15rem]'>
                        <div className="">
                            <img src={Demo3} className='h-[10rem] w-[15rem]' alt='try reloading' />
                        </div>
                        <div className="">
                        <span className="font-bold">Coachmagic</span>
                        <p className="text-justify">Contributed as an front-end developer(React, Tailwind css) in an Web-based project.</p>
                        </div>  
                </div>
            </div>
        </div>
    );
}
