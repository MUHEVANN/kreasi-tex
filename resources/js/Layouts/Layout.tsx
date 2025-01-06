import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Navbar from "@/Components/Navbar";
import { Head, usePage } from "@inertiajs/react";
import React, { useLayoutEffect } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { CarouselColumn } from "@/Pages/Carousel/DataTable/ColumnsCarousel";
function Layout({ children }: { children: React.ReactNode }) {
    const { carousel } = usePage<{
        auth: any;
        carousel: CarouselColumn[];
    }>().props;

    const userBrowser = navigator.userAgent;

    useLayoutEffect(() => {
        window.scrollTo({
            top: userBrowser.includes("Edg") ? 812 : 835,
            left: 100,
            behavior: "smooth",
        });
    }, []);
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
                <div className="w-full h-screen">
                    <Swiper
                        className="mySwiper w-full h-screen"
                        effect="fade"
                        modules={[Autoplay, EffectFade]}
                        loop
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                    >
                        {carousel.map((item) => (
                            <SwiperSlide
                                className=" h-full "
                                style={{
                                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('storage/${item.gambar}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="w-full h-screen px-4 flex justify-center  z-50 text-white flex-col max-w-screen-lg mx-auto">
                                    <div className="h-[100px] w-[700px] hidden md:block mb-5 ">
                                        <img
                                            src="/kreasitex_logo.png"
                                            alt=""
                                            className="w-full h-full object-cover -translate-x-[100px]"
                                        />
                                    </div>
                                    <h1 className="text-white text-[52px] font-bold">
                                        {item.title}
                                    </h1>
                                    <p>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;
