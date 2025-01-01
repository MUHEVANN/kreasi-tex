import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { AlignJustify } from "lucide-react";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="kreasitex_logo.png"
                    type="image/png"
                    sizes="32x32"
                />
            </Head>
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
        </>
    );
}

export default Layout;
