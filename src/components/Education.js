export default function Education()
{
    return (
                <div className=" flex justify-center items-center max-h-fit">
                            <ul className="list-disc  tracking-wide">
                                <div className="md:grid md:grid-cols-[5fr_1fr]">
                                    <li >
                                    <span className="font-bold py-1">Kongu Engineering College, Erode </span>
                                        <p className="py-1">Secured CGPA(till 4th semester) - 8.96</p>
                                    </li>
                                    <div className="time_period py-1">
                                    <p className="flex items-center rounded-full w-fit bg-teal-300/70 px-4">2021-2025</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="md:grid md:grid-cols-[5fr_1fr] ">
                                    <li >
                                    <span className="font-bold py-1">Infant Jesus Matriculation Higher Secondary School,Tiruppur</span>
                                        <p className="py-1">Higher Secondary School - 95.15%</p>
                                    </li>
                                    <div className="time_period py-1">
                                    <p className="flex items-center rounded-full w-fit bg-teal-300/70 px-4">2020-2021</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="md:grid md:grid-cols-[5fr_1fr] ">
                                    <li> 
                                    <span className="font-bold py-1">Kongu Vellalar Matriculation Higher Secondary School,Tiruppur</span>
                                        <p className="py-1">Secondary School Leaving Certificate - 93.8%</p>
                                    </li>
                                    <div className="time_period py-1">
                                    <p className="flex items-center rounded-full w-fit bg-teal-300/70 px-4">2018-2019</p>
                                    </div>
                                </div>

                            </ul>
                </div>
    );
}