import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Navbar from "@/Components/Navbar";
import { AlignJustify } from "lucide-react";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
         
            <div
                className="min-h-screen  bg-no-repeat bg-cover relative bg-fixed"
                style={{ backgroundImage: "url('hero.webp')" }}
            >
                <HeroLogo />
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
