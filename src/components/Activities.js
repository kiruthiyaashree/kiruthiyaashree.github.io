import '../App.css';
export default function Activities()
{
    return (
                <div className=" flex justify-center items-center h-full">
                            <ul className="list-disc  tracking-wide">
                                <div className="md:grid md:grid-cols-[5fr_1fr]">
                                    <li >
                                    <span className="font-bold py-1">Joint Secretary</span>
                                        <p className="py-1">Computer Science Engineering Coding Club - KEC</p>
                                    </li>
                                    <div className="time_period">
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4 py-1">2023-2024</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="md:grid md:grid-cols-[5fr_1fr] ">
                                    <li >
                                    <span className="font-bold py-1">Class Representative</span>
                                        <p className='py-1'>II CSE-B (3rd Semester) - KEC </p>
                                    </li>
                                    <div className="time_period">
                                    <p className="py-1 flex items-center rounded-full bg-teal-300/70 px-4">2022-2022</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="md:grid md:grid-cols-[5fr_1fr] ">
                                    <li> 
                                    <span className=" py-1 font-bold">Executive Member</span>
                                    <p className="py-1">Computer Science Engineering Coding Club - KEC</p>
                                    </li>
                                    <div className="time_period">
                                    <p className="py-1 flex items-center rounded-full bg-teal-300/70 px-4">2022-2023</p>
                                    </div>
                                </div>

                            </ul>
                </div>
    );
}