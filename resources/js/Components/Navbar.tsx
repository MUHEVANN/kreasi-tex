import { Link } from "@inertiajs/react";
import { AlignJustify, X } from "lucide-react";
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
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="w-full fixed top-0 z-[999]">
            <div className="md:px-[5rem] lg:px-[15rem] 2xl:px-[30rem] hidden md:block">
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
            <div
                className="px-4 py-5 md:hidden"
                onClick={() => setIsOpen(true)}
            >
                <AlignJustify className="hover:cursor-pointer" />
            </div>
            <div
                className={`fixed top-0 w-[70%] h-full bg-white z-[999] transition-all duration-300 ease-in-out md:hidden ${
                    isOpen ? "left-0" : "-left-full"
                }`}
            >
                <div className="w-full py-4 px-5 flex justify-end">
                    <X
                        onClick={() => setIsOpen(false)}
                        className="hover:cursor-pointer"
                    />
                </div>
                <div>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="block text-[18px] noto-sans py-4 px-5  border-gray-200"
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
