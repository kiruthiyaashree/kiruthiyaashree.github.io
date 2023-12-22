import Divider from '@mui/material/Divider';
import Tabs from './Tabs';

export default function Resume()
{
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-semibold'>Resume</h2>
                <h5 className='p-3'>Bio Details</h5>
                <Divider sx={{
                    width:200,
                    borderColor:"black",
                    borderWidth: '2px', 
                }}/>
                </div>
                <br/>
                <br/>
                <br/>
                <Tabs/>
        </div>
    );
}