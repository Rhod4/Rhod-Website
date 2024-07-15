import React from "react";
import Link from 'next/link'
import Image from "next/image";

export default function MainNav() {
    const navItems = [{
        text: "About Me",
        link: "/about",
        type: 'link'
    },
    {
        text: "My Career",
        link: "/career",
        type: 'link'
    },
    {
        text: "Portfolio",
        link: "/portfolio",
        type: 'image'
    },
    {
        text: "Portfolio",
        link: "/portfolio",
        type: 'link'
    },
    {
        text: "My CV",
        link: "/cv",
        type: 'link'
    }
    ]

    return <div className={`w-full grid justify-items-center items-end mt-32 grid-cols-4 md:grid-cols-5 border-b mb-10 md:mb-32 pb-2`}>
        {navItems.map(item => (
            <>
                {item.type === 'link' &&
                    
                <div className="flex justify-center p-2" key={item.link}>
                <Link href={item.link}>
                    {item.text}
                </Link>
                </div>
                }
                {item.type === 'image' &&
                <div className="hidden relative md:flex justify-center">
                    <div className="absolute w-[200px] h-[200px] -mt-[8rem] ">
                    <Image
                        src={"/images/me/safety-boat.jpg"}
                        width={300}
                        height={200}
                        alt={"writemedia logo"}
                        priority
                        className="rounded-full"
                    />
                    </div>
                </div>
                }
                </>
        ))}
    </div>
} 