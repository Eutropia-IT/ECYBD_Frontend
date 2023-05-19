import Link from "next/link"
import style from './Header.module.css'

export default function Navbar() {
    const menuItems = <>
        <li><Link href='' className={style.containerFont}>Home</Link></li>
        <li><Link href='' className={style.containerFont}>DIOCESEN COMMISSIONS</Link></li>
        <li><Link href='' className={style.containerFont}>Movements</Link></li>
        <li><Link href='' className={style.containerFont}>BLOG </Link></li>
        <li><Link href='' className={style.containerFont}>RESOURCES </Link></li>
        <li><Link href='' className={style.containerFont}>CONTACT </Link></li>
    </>
    return <div className={style.Container}>
        <div className="navbar mx-auto" style={{ height: '100px', width: '90%', margin: 'auto' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className=" normal-case text-xl">
                    <img style={{height: "100px", width:"110px"}} src={"https://i.ibb.co/wpwXr0W/Logo-1.png"} alt="logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn uppercase text-white bg-red-600 border-r-0">DONATE</a>
            </div>
        </div>
    </div>
}