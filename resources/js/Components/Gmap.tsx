import { getData } from "@/lib/api";
import { GmapProps } from "@/Pages/Gmap/GmapEdit";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { HousePlus, MapPin } from "lucide-react";

function Gmap() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [indexActive, setIndexActive] = useState(0);
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
        <div className="main__container my-[3rem] pt-[3rem] md:pt-0">
            <div className="mx-[1rem] sm:mx-[5rem] md:mx-[10rem] xl:mx-[15rem] bg-slate-100 py-3 pt-3 px-3 sm:translate-y-[50%] relative z-[999]">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide
                            key={item.id}
                            className={`cursor-pointer mb-4 p-4 border border-gray-200 bg-white rounded hover:bg-gray-100 ${
                                indexActive === index && "shadow-lg"
                            }`}
                            onClick={() => {
                                setIndexActive(index);
                                if (swiperRef.current) {
                                    swiperRef.current.slideTo(index);
                                }
                            }}
                        >
                            <h1 className="text-xl font-semibold capitalize flex items-center gap-x-4">
                                <div
                                    className={`${
                                        indexActive === index
                                            ? " bg-yellow-400  text-white"
                                            : "text-black/60"
                                    } p-2 rounded-full transition-all duration-300 ease-in-out`}
                                >
                                    <HousePlus />
                                </div>
                                <span
                                    className={`${
                                        indexActive === index
                                            ? "text-coklat"
                                            : "text-black/60"
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </h1>
                            <p
                                className={`${
                                    indexActive === index
                                        ? "text-coklat"
                                        : "text-gray-400 "
                                } mt-4 flex items-center gap-x-2`}
                            >
                                <MapPin size={14} />
                                {item.desc}
                            </p>
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
