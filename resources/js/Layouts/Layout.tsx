import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Navbar from "@/Components/Navbar";
import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { CarouselColumn } from "@/Pages/Carousel/DataTable/ColumnsCarousel";
function Layout({ children }: { children: React.ReactNode }) {
    const { carousel } = usePage<{
        auth: any;
        carousel: CarouselColumn[];
    }>().props;
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
                                <div className="w-full h-screen flex justify-center items-center z-50 text-white flex-col">
                                    <div className="h-[100px] w-[500px] hidden md:block">
                                        <img
                                            src="/kreasitex_logo.png"
                                            alt=""
                                            className="w-full h-full object-cover"
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
