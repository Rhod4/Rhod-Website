import React from "react";
import Link from 'next/link'

export default function MainNav() {
    const navItems = [{
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
        link: "/cv"
    }
    ]

    return <div className={`w-full grid justify-items-center mt-10 grid-cols-4 mb-5 border-b`}>
        {navItems.map(item => (
            <div className="flex justify-center p-2">
                <Link href={item.link}>
                    {item.text}
                </Link>
            </div>
        ))}
    </div>
}