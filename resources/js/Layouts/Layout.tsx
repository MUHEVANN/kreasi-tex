import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Navbar from "@/Components/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div
                className="min-h-screen  bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('hero.jpg')" }}
            >
                <HeroLogo />
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
