// import styles from './Header.module.css'
import Link from "next/link";
import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";


export default function Navbar() {

    const [open, setOpen] = useState(false)
    return <div>


        {/* drawer button */}
        <div onClick={() => setOpen(!open)} className="lg:hidden drawer-content bg-gray-100">
            <label htmlFor="my-drawer" className="drawer-button">
                {
                    open ? <BsList className=" h-8 w-8 cursor-pointer" /> : <BsList className=" h-8 w-8 cursor-pointer" />
                }
            </label>
        </div>



        {/* main navbar large device */}
        <nav className="hidden lg:block">
            <div className="lg:flex items-center justify-around ">
                {/* logo section */}
                <div className="avatar">
                    <div className="w-14 lg:w-24 mb-5 lg:mb-0">
                        <img src={`https://i.ibb.co/wpwXr0W/Logo-1.png`} alt="" />
                    </div>
                </div>

                {/* main section */}
                <div>
                    <ul className="lg:flex items-center lg:space-x-4 text-sm font-bold">
                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>Home</Link></li>
                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>About</Link></li>
                        <div className="dropdown ">
                            <li tabIndex={0} className=" border-b-2 border-gray-600 lg:border-0 w-full block"><Link href=''>Diocesen Commissions  &#10095;</Link>
                                <ul tabIndex={0} className="menu dropdown-content pt-9  bg-gray-100 w-full rounded-md">
                                    <li><Link href=''>Dhaka</Link></li>
                                    <li><Link href=''>Cumilla</Link></li>
                                    <li><Link href=''>Sylhet</Link></li>
                                    <li><Link href=''>Rajshahi</Link></li>
                                    <li><Link href=''>Khulna</Link></li>
                                </ul>
                            </li>
                        </div>

                        <div className="dropdown ">
                            <li tabIndex={0} className=" border-b-2 border-gray-600 lg:border-0 block"><Link href=''>Movements &#10095;</Link>
                                <ul tabIndex={0} className="menu dropdown-content  bg-gray-100 w-80 rounded-md pt-9">
                                    <li><Link href=''>Bangladesh Catholic Students’ Movement (BCSM)</Link></li>
                                    <li><Link href=''>Young Christian Students (YCS) & Young Students Movement (YSM)</Link></li>
                                    <li><Link href=''>Jesus Youth </Link></li>
                                </ul>
                            </li>
                        </div>

                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>BLOG</Link></li>
                        <div className="dropdown ">
                            <li tabIndex={1} className=" border-b-2 border-gray-600 lg:border-0 block "><Link href=''>RESOURCES &#10095;</Link>
                                <ul tabIndex={1} className="menu dropdown-content  bg-gray-100 w-64 rounded-md pt-9">
                                    <li><Link href=''>Gallery </Link></li>
                                    <li><Link href=''>Publications &#10095;</Link>
                                        <ul className="bg-gray-100">
                                            <li><Link href=''>Newsletter</Link></li>
                                            <li><Link href=''>Nobokollol</Link></li>
                                            <li><Link href=''>BCSM BARTA</Link></li>
                                        </ul></li>
                                </ul>
                            </li>
                        </div>
                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>Contact</Link></li>
                    </ul>
                </div>

                {/* button section */}
                <div className="btn btn-sm bg-red-600">Contact us</div>
            </div>
        </nav>




        {/* drawer section */}
        <div className="absolute z-50 lg:hidden">

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side lg:hidden overflow-hidden">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-gray-100">

                        <nav className="">
                            <div className="lg:flex items-center justify-around ">

                                {/* logo section */}
                                <div className="flex justify-between items-center">
                                    <div className="avatar">
                                        <div className="w-14 lg:w-24 mb-5 lg:mb-0">
                                            <img src={`https://i.ibb.co/wpwXr0W/Logo-1.png`} alt="" />
                                        </div>
                                    </div>
                                    <div onClick={() => setOpen(!open)} className="lg:hidden">
                                        <label htmlFor="my-drawer" className="drawer-button">
                                            {
                                                open ? <BsXLg className=" h-8 w-8 -mt-6 cursor-pointer" /> : <BsXLg className="h-8 w-8 hidden" />
                                            }
                                        </label>
                                    </div>
                                </div>


                                {/* main section */}
                                <div>
                                    <ul className="lg:flex items-center lg:space-x-4 text-sm font-bold">
                                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>Home</Link></li>
                                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>About</Link></li>
                                        <div className="dropdown border-b-2 border-gray-600 lg:border-0 w-full">
                                            <li tabIndex={0} className=""><Link href=''>Diocesen Commissions  &#10095;</Link>
                                                <ul tabIndex={0} className="menu dropdown-content  bg-gray-100 w-full rounded-md">
                                                    <li><Link href=''>Dhaka</Link></li>
                                                    <li><Link href=''>Cumilla</Link></li>
                                                    <li><Link href=''>Sylhet</Link></li>
                                                    <li><Link href=''>Rajshahi</Link></li>
                                                    <li><Link href=''>Khulna</Link></li>
                                                </ul>
                                            </li>
                                        </div>
                                        <div className="dropdown border-b-2 border-gray-600 lg:border-0 w-full">
                                            <li tabIndex={0} className=""><Link href=''>Movements &#10095;</Link>
                                                <ul tabIndex={0} className="menu dropdown-content  bg-gray-100 w-full rounded-md">
                                                    <li><Link href=''>Bangladesh Catholic Students’ Movement (BCSM)</Link></li>
                                                    <li><Link href=''>Young Christian Students (YCS) & Young Students Movement (YSM)</Link></li>
                                                    <li><Link href=''>Jesus Youth </Link></li>
                                                </ul>
                                            </li>
                                        </div>
                                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>BLOG</Link></li>
                                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>RESOURCES &#10095;</Link>
                                            <ul >
                                                <li><Link href=''>Gallery</Link></li>
                                                <li><Link href=''>Publications &#10095;</Link>
                                                    <ul tabIndex={0} className="menu dropdown-content  bg-gray-100 w-full rounded-md">
                                                        <li><Link href=''>Newsletter</Link></li>
                                                        <li><Link href=''>Nobokollol</Link></li>
                                                        <li><Link href=''>BCSM BARTA</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="border-b-2 border-gray-600 lg:border-0"><Link href=''>Contact</Link></li>
                                    </ul>
                                </div>


                                {/* button section */}
                                <div className="btn btn-sm bg-red-600 mt-2">Contact us</div>
                            </div>
                        </nav>

                    </ul>
                </div>
            </div>
        </div>
    </div >
}