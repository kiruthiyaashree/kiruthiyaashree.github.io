import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

export default function ContactForm()
{
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-semibold'>Contact Me</h2>
                <h5 className='p-3'>Keep in Touch</h5>
                <Divider sx={{
                    width:200,
                    borderColor:"black",
                    borderWidth: '2px', 
                }}/>
                </div>
                <br/>
                <br/>
                <br/>

                <div className='flex justify-center '>
                <div className='grid grid-cols-2 w-[60rem] h-[30rem] p-3 border-dashed border-2 rounded-xl bg-cyan-50 border-black'>
                    <div>
                        <div className='text-base h-full flex justify-center items-center lg:text-xl'>
                        <p className='rounded-[23%_77%_67%_33%_/_50%_61%_39%_50%] border border-b-4 border-r-4 border-black w-52 h-52 flex justify-center items-center text-[2em] font-Courgette leading-10'>Get In
                        <br/>Touch
                        </p>
                        </div>
                        <div>
                            {/* icons  */}
                        </div>
                    </div>

                    <form className='flex flex-col justify-center items-center'>
                        <div className='p-3'>
                            <TextField id="name" autoComplete='false' label="Name" variant="standard" sx={{width:250}}/>
                        </div>
                        <div className='p-3'>
                            <TextField id="email" autoComplete='false' label="Email" variant="standard" sx={{width:250}}/>
                        </div>
                        <div className='p-3'>
                            <TextField id="message" label="Your Message" variant="standard" sx={{width:250}}/>     
                        </div>
                        <br/>
                        <div className='flex justify-center p-3'>
                                <button className='border rounded-xl border-black w-fit px-2 py-1 hover:bg-white font-semibold'>Send</button>
                            </div>
                    </form>

                </div>
                </div>


        </div>
    );
}
