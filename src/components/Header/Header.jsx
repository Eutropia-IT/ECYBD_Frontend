import style from './Header.module.css'
import Link from "next/link";
import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";


export default function Navbar() {

    const [open, setOpen] = useState(false)
    return <div>


        {/* drawer button */}
        <div className='flex items-center justify-between bg-gray-200 lg:hidden'>
            <div className="avatar">
                <div className="w-14">
                    <img src={`https://i.ibb.co/wpwXr0W/Logo-1.png`} alt="" />
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className="lg:hidden drawer-content">
                <label htmlFor="my-drawer-2" className='drawer-button'>
                    {
                        open ? <BsXLg className=" h-8 w-8 cursor-pointer" /> : <BsList className=" h-8 w-8 cursor-pointer" />
                    }
                </label>
            </div>
        </div>




        {/* screen size desktop */}
        <div className='hidden lg:block'>
            <nav className="flex items-center justify-around text-blue-700">

                {/* logo */}
                <div className="avatar">
                    <div className="w-14 lg:w-24 mb-5 lg:mb-0">
                        <img src={`https://i.ibb.co/wpwXr0W/Logo-1.png`} alt="" />
                    </div>
                </div>

                {/* menu */}
                <div className={style.fontColor}>
                    <menu className="text-sm font-bold uppercase">
                        <ul className="flex items-center space-x-4">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/about'>About</Link></li>
                            <li className={style.drops}><Link href=''>Diocesen Commissions  &#10095;</Link>
                                <ul className={style.drop}>
                                    <li><Link href=''>Barishal</Link></li>
                                    <li><Link href=''>Chattogram</Link></li>
                                    <li><Link href=''>Dhaka</Link></li>
                                    <li><Link href=''>Dinajpur</Link></li>
                                    <li><Link href=''>Khulna</Link></li>
                                    <li><Link href=''>Mymensingh</Link></li>
                                    <li><Link href=''>Rajshahi</Link></li>
                                    <li><Link href=''>Sylhet</Link></li>
                                </ul>
                            </li>
                            <li className={style.drops}><Link href=''>Movements &#10095;</Link>
                                <ul className={style.drop2}>
                                    <li><Link href=''>Bangladesh Catholic Students’ Movement (BCSM)</Link></li>
                                    <li><Link href=''>Young Christian Students (YCS) & Young Students Movement (YSM)</Link></li>
                                    <li><Link href=''>Jesus Youth </Link></li>
                                </ul>
                            </li>
                            <li><Link href='/blog'>Blog</Link></li>
                            <li className={style.drops}><Link href=''>RESOURCES &#10095;</Link>
                                <ul className={style.drop}>
                                    <li><Link href=''>Gallery</Link></li>
                                    <li className={style.dropLast}><Link href=''>Publications  &#10095;</Link>
                                        <ul className={style.drop3}>
                                            <li><Link href=''>Newsletter</Link></li>
                                            <li><Link href=''>Nobokollol</Link></li>
                                            <li><Link href=''>BCSM BARTA</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </menu>
                </div>

                {/* button */}
                <div>
                    <button className="btn btn-sm bg-red-500">Contact Us</button>
                </div>
            </nav>
        </div>




        {/* mobile size */}
        <div className='lg:hidden absolute z-20'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-gray-100">
                        <nav>
                            {/* mobile size navbar */}
                            <div className='text-blue-600 uppercase text-sm font-bold'>
                                <ul>
                                    <li><Link href=''>Home</Link></li>
                                    <li><Link href=''>About</Link></li>
                                    <li className={style.dropsMobile}><Link href=''>Diocesen Commissions  &#10095;</Link>
                                        <ul className={style.dropMobile}>
                                            <li><Link href=''>Barishal</Link></li>
                                            <li><Link href=''>Chattogram</Link></li>
                                            <li><Link href=''>Dhaka</Link></li>
                                            <li><Link href=''>Dinajpur</Link></li>
                                            <li><Link href=''>Khulna</Link></li>
                                            <li><Link href=''>Mymensingh</Link></li>
                                            <li><Link href=''>Rajshahi</Link></li>
                                            <li><Link href=''>Sylhet</Link></li>
                                        </ul>
                                    </li>
                                    <li className={style.dropsMobile}><Link href=''>Movements &#10095;</Link>
                                        <ul className={style.dropMobile}>
                                            <li><Link href=''>Bangladesh Catholic Students’ Movement (BCSM)</Link></li>
                                            <li><Link href=''>Young Christian Students (YCS) & Young Students Movement (YSM)</Link></li>
                                            <li><Link href=''>Jesus Youth </Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href=''>Blog</Link></li>
                                    <li className={style.dropsMobile}><Link href=''>RESOURCES &#10095;</Link>
                                        <ul className={style.dropMobile}>
                                            <li><Link href=''>Gallery</Link></li>
                                            <li className={style.dropsMobile2}><Link href=''>Publications  &#10095;</Link>
                                                <div className={style.dropMobile2}>
                                                    <ul className='bg-none'>
                                                        <li><Link href=''>Newsletter</Link></li>
                                                        <li><Link href=''>Nobokollol</Link></li>
                                                        <li><Link href=''>BCSM BARTA</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link href=''>Contact</Link></li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <button className="btn btn-sm bg-red-500">Contact Us</button>
                            </div>
                        </nav>
                    </ul>
                </div>
            </div>
        </div>

    </div >
}