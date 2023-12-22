import LinearProgress from '@mui/material/LinearProgress';

export default function Skills()
{
    return (
        <div>
            <ul className="ml-2 px-4 leading-relaxed list-disc">
                <li>Java Programming
                <LinearProgress variant='determinate' value={80}/>
                </li>
                <li>C Programming
                <LinearProgress variant='determinate' value={50}/>
                </li>
                <li>HTML,CSS,JAVASCRIPT
                <LinearProgress variant='determinate' value={75}/>
                </li>
                <li>MYSQL
                <LinearProgress variant='determinate' value={75}/>
                </li>
                <li>React
                <LinearProgress variant='determinate' value={70}/>
                </li>
                <li>Node Js
                <LinearProgress variant='determinate' value={50}/>
                </li>
                <li>MongoDB
                <LinearProgress variant='determinate' value={50}/>
                </li>
            </ul>
        </div>
    );
}