import { getData } from "@/lib/api";
import { GmapProps } from "@/Pages/Gmap/GmapEdit";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";

function Gmap() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const swiperCoba = useRef<SwiperCore | null>(null);
    const [data, setData] = useState<GmapProps[]>([]);
    const [loading, setLoading] = useState(true); // State untuk loading
    const [error, setError] = useState<string | null>(null); // State untuk error

    // Ambil data dari API saat komponen di-mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getData("/g-map/data");
                setData(res);
            } catch (err) {
                setError("Gagal memuat data, silakan coba lagi.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Ekstrak URL dari tag iframe
    const getUrlMap = (link: string) => {
        try {
            return (
                link
                    .split(" ")
                    .find((item) => item.includes("src")) // Cari atribut src
                    ?.replace(/src=["']?|["']$/g, "") || "" // Bersihkan atribut
            );
        } catch {
            return "";
        }
    };

    if (loading) return <p className="text-center">Memuat data...</p>; // Loader
    if (error) return <p className="text-center text-red-500">{error}</p>; // Pesan error

    return (
        <div className="main__container my-[3rem]">
            <div className="mx-[15rem] bg-gray-200 pt-3 px-3 translate-y-[50%] relative z-[999]">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSwiper={(swiper) => (swiperCoba.current = swiper)}
                >
                    {data.map((item, index) => (
                        <SwiperSlide
                            key={item.id}
                            className="cursor-pointer mb-4 p-4 border border-gray-200 bg-white rounded-lg shadow hover:bg-gray-100"
                            onClick={() => {
                                if (swiperRef.current) {
                                    swiperRef.current.slideTo(index);
                                }
                            }}
                        >
                            <h1 className="text-3xl font-bold capitalize">
                                {item.title}
                            </h1>
                            <p className="mt-4 text-gray-600">{item.desc}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="w-full ">
                        <iframe
                            src={getUrlMap(item.link)}
                            width="100%"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gmap;