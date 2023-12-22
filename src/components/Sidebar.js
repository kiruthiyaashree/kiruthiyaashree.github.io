import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import '../App.css';
import {Link} from 'react-router-dom';
export default function Sidebar()
{
    const icons=[
        {
            id:1,
            text:"Home",
            element:<HomeOutlinedIcon/>,
            path:'/',
        },
        {
            id:2,
            text:"About",
            element:<InfoIcon/>,
            path:'/about',
        },
        {
            id:3,
            text:"Projects",
            element:<LayersIcon/>,
            path:'/projects',
        },
        {
            id:4,
            text:"Contact",
            element:<ConnectWithoutContactIcon/>,
            path:'/contact',
        }
    ]
    return (
        <div className='sidebar flex justify-start fixed top-[20rem] left-2'>
            <div className=' w-fit p-2 rounded-full'>
            {
                icons.map((icon)=>
                <Link key={icon.id} to={icon.path} >
                <button className='px-3 py-3 my-3 flex bg-gray-100 hover:bg-teal-300/50 shadow-2xl border-black rounded-full relative group'>
                {icon.element}
                <span className='px-2 font-semibold hidden group-hover:inline-block'>
                    {icon.text}
                </span>
                </button>
                </Link>
                )
            }
            </div>
        </div>
    );
}
