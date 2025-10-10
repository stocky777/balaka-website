"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1} from "react-icons/rx";

export default function Navbar()
{
    // useState hook for the navbar
    const [isOpen, setIsOpen] = useState(false);
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

    const closeMenu = () =>
        {
            setIsOpen(false);
        }

    return(
        <div>
            {/* main navbar here */}
            <nav className='fixed top z-50 h-auto p-8 justify-between flex items-center'>
                {/* logo */}
                <div className="text-3xl font-semibold">Balaka</div>
                {/* burger icon */}
                <button className="fixed right-2 sm:hidden text-4xl bg-amber-500 rounded-full p-3" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RxCross1/> : <RxHamburgerMenu/>}
                </button>
                {/* items only for desktop view*/}
                <div className="hidden  sm:block">
                    <Link href="/" className="text-2xl px-4">Home</Link>
                    <Link href="/menu" className="text-2xl px-4">Menu</Link>
                    <Link href="/about" className="text-2xl px-4">About us</Link>
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