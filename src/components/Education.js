export default function Education()
{
    return (
                <div className=" flex justify-center items-center h-full">
                            <ul className="list-disc  tracking-wide">
                                <div className="grid grid-cols-[5fr_1fr]">
                                    <li >
                                    <span className="font-bold">Kongu Engineering College, Erode </span>
                                        <p>Secured CGPA(till 4th semester) - 8.96</p>
                                    </li>
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4">2021-2025</p>
                                </div>
                                <br/>
                                <div className="grid grid-cols-[5fr_1fr] ">
                                    <li >
                                    <span className="font-bold">Infant Jesus Matriculation Higher Secondary School,Tiruppur</span>
                                        <p >Higher Secondary School - 95.15%</p>
                                    </li>
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4">2020-2021</p>
                                </div>
                                <br/>
                                <div className="grid grid-cols-[5fr_1fr] ">
                                    <li> 
                                    <span className="font-bold">Kongu Vellalar Matriculation Higher Secondary School,Tiruppur</span>
                                        <p>Secondary School Leaving Certificate - 93.8%</p>
                                    </li>
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4">2018-2019</p>
                                </div>

                            </ul>
                </div>
    );
}