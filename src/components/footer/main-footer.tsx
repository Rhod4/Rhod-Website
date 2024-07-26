import React from "react";
import Link from 'next/link'
import Image from "next/image";

export default function MainFooter() {
    const navItems = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About Me",
        link: "/about"
    },
    {
        text: "My Career",
        link: "/career"
    },
    {
        text: "Portfolio",
        link: "/portfolio"
    },
    {
        text: "My CV",
        link: "/cv",
    }
    ]

    return <div className={"flex w-full justify-around py-10 border-t-1"}>
        {navItems.map(item => {
           return <div className="">
            <Link href={item.link}>
                {item.text}
            </Link>
           </div> 
        }
        )}
    </div>
} 