import { Link } from "@inertiajs/react";
import React from "react";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Products",
        href: "/product",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Material Info",
        href: "/material-info",
    },
];

function Navbar() {
    return (
        <div className="w-full fixed top-0 z-[999]">
            <div className="md:px-[5rem] lg:px-[30rem] hidden md:block">
                <div className=" flex justify-between py-8 border-b border-black backdrop-blur-sm">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className=" text-[18px] noto-sans"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
