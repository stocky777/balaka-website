"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1} from "react-icons/rx";
import { usePathname } from "next/navigation";
export default function Navbar()
{
    // useState hook for the navbar
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Prevent background scrolling when menu is open
    useEffect(()=>{
        if(isOpen)
            {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return()=>
                {
                    document.body.style.overflow = 'auto';
                };
    }, [isOpen]);
    // Close menu on navigation 
    const closeMenu = () =>
        {
            setIsOpen(false);
        }

    const isActiveLink = (path)=>
        {
            return pathname === path;
        }

    return(
        <div>
            {/* main navbar here */}
            <nav className='fixed top z-50 h-auto p-8 justify-between flex items-center w-full '>
                {/* logo */}
                <Link href="/" onClick={closeMenu}><div className="text-3xl font-semibold hover:text-amber-200">Balaka</div></Link>
                {/* burger icon */}
                <button className="fixed right-2 sm:hidden text-4xl bg-amber-400 rounded-full p-3" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RxCross1/> : <RxHamburgerMenu/>}
                </button>
                {/* items only for desktop view*/}
                <div className="hidden sm:block text-white backdrop-blur-2xl w-auto rounded-full">
                    <div className="p-2">
                        <Link href="/" className={`text-2xl w-auto px-4 hover:text-amber-300 duration-200 ${isActiveLink("/") ? "text-amber-500 font-bold" : "text-white"}`}>Home</Link>
                        <Link href="/menu" className={`text-2xl w-auto px-4 hover:text-amber-300 duration-200 ${isActiveLink("/menu") ? "text-amber-500 font-bold" : "text-white"}`}>Menu</Link>
                        <Link href="/about" className={`text-2xl w-auto px-4 hover:text-amber-300 duration-200 ${isActiveLink("/about") ? "text-amber-500 font-bold" : "text-white"}`}>About us</Link>
                    </div>
                </div>               
            </nav>
            {/* Updated mobile menu */}
            <div className={`
                fixed inset-0 z-40 flex flex-col text-left justify-center font-bold bg-gradient-to-b from-blue-950 to-blue-400 transition-all duration-300 ease-out
                ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
                sm:hidden
            `}>
                
                    <Link href="/" className="text-3xl p-4 block transition" onClick={closeMenu}>Home</Link>
                    <Link href="/menu" className="text-3xl p-4 block transition" onClick={closeMenu}>Menu</Link>
                    <Link href="/about" className="text-3xl p-4 block transition" onClick={closeMenu}>About us</Link>

            </div>
        </div>
    );
}