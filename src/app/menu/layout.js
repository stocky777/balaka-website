"use client";
import { useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuCategories } from "../../../data/menuCategories";

export default function MenuLayout({ children }) {
    const pathname = usePathname();
    const isActive = (path)=> pathname === path;
    //console.log(pathname);
    return (
      <section className="min-h-screen py-25 flex flex-col bg-grey-200">
        <div className="w-full overflow-x-auto bg-amber-400 ">
            <div className="flex space-x-4 p-4">
                {menuCategories.map((category)=>(
                    <Link
                    key={category.path}
                    href={category.path}
                    className={`h-20 w-40 flex-shrink-0 flex items-center justify-center rounded-lg px-4 text-center font-semibold 
                        ${isActive(category.path) ? "bg-amber-500 text-white scale-105 shadow-lg" : "bg-red-400"}`}>
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
        <div className="flex-grow">{children}</div>
      </section>
    );
  }