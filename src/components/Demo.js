import Divider from '@mui/material/Divider';

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
        </div>
    );
}