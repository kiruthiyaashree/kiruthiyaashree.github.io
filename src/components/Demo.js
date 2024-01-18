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
            <br/>
            <br/>

            <div className=' flex justify-center'>
                <div className='md:grid md:grid-cols-3 md:gap-20 sm:grid sm:grid-cols-1 sm:gap-y-24 demo '>
                    <div className=' w-[15rem] shadow-xl'>
                            <a className="" href='https://quick-bite-lyzj.onrender.com/' target='blank'>
                                <img src={Demo1} className='h-[10rem] w-[15rem]' alt='try reloading' />
                            </a>
                            <div className="p-3">
                                <p className="font-bold">QuickBite</p>
                                <p className="text-justify">Designed an food-based website to explore my HTML, CSS and Javascript knowledge.</p>
                            </div>  
                    </div>
                    <div className=' w-[15rem] shadow-xl'>
                            <a href='https://github.com/kiruthiyaashree/javafx-application/tree/main' target='blank' className="">
                                <img src={Demo2} className='h-[10rem] w-[15rem]' alt='try reloading' />
                            </a>
                            <div className="p-3">
                            <p className="font-bold">Online Quiz Management System</p>
                            <p className="text-justify">Developed a Java-based application with JavaFXML for the front-end and utilized MySQL for the backend.</p>
                            </div>  
                    </div>
                    <div className=' w-[15rem] shadow-xl'>
                            <a href='https://coach-magic-lnzs.onrender.com/home' target='blank' className="">
                                <img src={Demo3} className='h-[10rem] w-[15rem]' alt='try reloading' />
                            </a>
                            <div className="p-3">
                            <span className="font-bold">Coachmagic</span>
                            <p className="text-justify">Contributed as an front-end developer(React, Tailwind css) in an Web-based project.</p>
                            </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
